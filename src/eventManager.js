import EventFactory from './eventFactory';
import { saveEvents } from './services/eventService/eventService';

const BUFFER_SIZE = 20;

class EventManager {

  constructor(productId, userId) {
    this._buffer = [];
    this._productId = productId;
    this._userId = userId;
    this.handleWindowUnload();
  }

  handleWindowUnload = () => {
    window.addEventListener('unload', this.flush);
  }

  add = ({event, groups, count, data, time}) => {
    const eventObj = EventFactory.createEvent({
      id: this._userId,
      event,
      groups,
      count,
      data,
      time
    });

    this._buffer.push(eventObj);

    if (this._buffer.length === BUFFER_SIZE) {
      this.flush();
    }
  }

  flush = () => {
    if (this._buffer.length) {
      saveEvents(this._productId, this._buffer);
      this._buffer = [];
    }
  }
}

export default EventManager;
