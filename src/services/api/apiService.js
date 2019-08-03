import { ERRORS } from "@errors/const";
import { normalizeUrl } from "@utils/url";
import { post } from "./request";
import { getHost, updateHost, getHostsCount } from "./host";

let server_fails = 0;

export const tryPost = (url, payload, onload, isAsync = true) => {
  let formattedUrl = normalizeUrl(getHost(), url);
  try {
    post(formattedUrl, payload, onload, isAsync);
    server_fails = 0;
  } catch (err) {
    if (err.name === ERRORS.VALIDATION) {
      throw err;
    }

    server_fails++;
    if (server_fails === getHostsCount()) {
      // we tried to send to all servers and failed.
      return;
    }
    updateHost();
    tryPost(url, payload, onload, isAsync);
  }
};
