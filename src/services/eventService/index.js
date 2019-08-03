import { Logger } from "@utils/logger";
import { tryPost } from "../api/apiService";
import { sendBeacon } from "../api/beacon";
import { ENDPOINTS } from "./endpoints";

export const saveEvents = (events, productId, onUnload = false) => {
  if (!events || !events.length) return;
  const url = ENDPOINTS.SAVE_EVENTS;
  const payload = { productId, events };
  try {
    onUnload ? sendBeacon(url, payload) : tryPost(url, payload);
  } catch (err) {
    Logger.error(err.message);
  }
};
