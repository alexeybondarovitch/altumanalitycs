import { request } from '../api/request';
import { sendBeacon } from '../api/beacon';
import { ENDPOINTS } from './endpoints';
import { ServerError } from '@errors';
import { ERROR_MESSAGES } from '../api/const';

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
      try {
        await request({
          url,
          method: ENDPOINTS.SAVE_EVENTS.method,
          payload,
          isHttps: true
        });
      }
      catch (err) {
        try {
          await request({
            url,
            method: ENDPOINTS.SAVE_EVENTS.method,
            payload,
            isHttps: false
          });
        } catch (err) {
          throw new ServerError(ERROR_MESSAGES.SERVER_ERROR);
        }
      }
    }
  }
}

