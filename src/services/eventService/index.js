import { post, sendBeacon } from '../api/request';
import { ENDPOINTS } from './endpoints';

export class EventAPIService {
  constructor(productId) {
    this._productId = productId;
  }

  saveEvents = async (events, onUnload = false) => {
    if (!events || ! events.length) return;
    const url = ENDPOINTS.SAVE_EVENTS;
    const data = {
      productId: this._productId,
      events
    }

    onUnload && sendBeacon(url, data) || await post(url, data);
  }
}

