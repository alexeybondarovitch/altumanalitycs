import { post, sendBeacon } from '../api/request';
//import { post } from '../api/debug';
import endpoints from './endpoints';

export default class EventAPIService {
  constructor(productId) {
    this._productId = productId;
  }

  saveEvents = async (events, onUnload = false) => {
    if (!events || ! events.length) return;
    const url = endpoints.SAVE_EVENTS;
    const data = {
      productId: this._productId,
      events
    }

    onUnload && sendBeacon(url, data) || await post(url, data);
  }
}

