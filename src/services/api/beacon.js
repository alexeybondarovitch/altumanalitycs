import { post } from './request';

export const sendBeacon = (url, payload) => {
  const navigator = window.navigator;
  const data = JSON.stringify(payload);
  if (!navigator || !navigator.sendBeacon || !navigator.sendBeacon(url, data)) {
    post(url, payload, false);
  }
}
