import { post } from '../api/request';
import { sendBeacon } from '../api/beacon';
import { ENDPOINTS } from './endpoints';

export class EventAPIService {
  constructor(productId) {
    this._productId = productId;
  }

  saveEvents = (events, onUnload = false) => {
    if (!events || !events.length) return;
    const url = ENDPOINTS.SAVE_EVENTS;
    const payload = {
      productId: this._productId,
      events
    }
    onUnload ? sendBeacon(url, payload) : post(url, payload);
  }
}

