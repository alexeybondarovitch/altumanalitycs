import { request, sendBeacon } from '../api/request';
import { ENDPOINTS } from './endpoints';

export class EventAPIService {
  constructor(productId) {
    this._productId = productId;
  }

  saveEvents = async (events, onUnload = false) => {
    if (!events || !events.length) return;
    const url = ENDPOINTS.SAVE_EVENTS.url;
    const payload = {
      productId: this._productId,
      events
    }

    if (onUnload) {
      sendBeacon(url, payload);
    } else {
      await request({
        url,
        method: ENDPOINTS.SAVE_EVENTS.method,
        payload
      });
    }
  }
}

