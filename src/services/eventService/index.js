import { post } from "../api/request";
import { sendBeacon } from "../api/beacon";
import { ENDPOINTS } from "./endpoints";

export const saveEvents = (events, productId, onUnload = false) => {
  if (!events || !events.length) return;
  const url = ENDPOINTS.SAVE_EVENTS;
  const payload = { productId, events };
  onUnload ? sendBeacon(url, payload) : post(url, payload);
};
