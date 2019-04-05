import { EventFactory } from '../eventFactory';
import { EventAPIService } from '@services/eventService';

import { BUFFER_SIZE } from './const';

export class EventManager {

  constructor(productId, userId) {
    this._buffer = [];
    this._productId = productId;
    this._userId = userId;
    this._eventService = new EventAPIService(productId);
    this.handleWindowUnload();
  }

  handleWindowUnload = () => {
    window && window.addEventListener('beforeunload',
    () => {
      this._eventService.saveEvents(this._buffer, true)
    },
    false);
  }

  add = ({ event, userId, groups, count, data, time }) => {
    const eventObj = EventFactory.createEvent({
      userId: userId || this._userId,
      event,
      groups,
      count,
      data,
      time
    });

    if (eventObj) {
      this._buffer.push(eventObj);
    }

    if (this._buffer.length === BUFFER_SIZE) {
      this.flush();
    }
  }

  flush = () => {
    this._eventService.saveEvents(this._buffer);
    this._buffer = [];
  }
}
