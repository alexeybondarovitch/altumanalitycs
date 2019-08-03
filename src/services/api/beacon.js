import { getHost } from "./host";
import { normalizeUrl } from "@utils/url";
import { tryPost } from "./apiService";

export const sendBeacon = (url, payload) => {
  const navigator = window.navigator;
  const data = JSON.stringify(payload);
  const formattedUrl = normalizeUrl(getHost(), url);
  if (
    !navigator ||
    !navigator.sendBeacon ||
    !navigator.sendBeacon(formattedUrl, data)
  ) {
    tryPost(url, payload, null, false);
  }
};
