import { InitializationError } from "@errors";
import { normalizeUrl } from "@utils/url";
import { post } from "./request";
import { BASE_HOST, ENDPOINTS } from "./const";

let hosts = [];
let currentAvailableServer = 0;

export const initHost = (productId, onInit) => {
  const payload = { productId };
  const url = normalizeUrl(BASE_HOST, ENDPOINTS.INIT);
  post(url, payload, responseText => {
    const jsonResponse = JSON.parse(responseText);
    if (jsonResponse && jsonResponse.servers) {
      hosts = jsonResponse.servers;
    } else {
      throw new InitializationError();
    }

    onInit && onInit();
  });
};

export const updateHost = () => {
  if (currentAvailableServer < hosts.length - 1) {
    currentAvailableServer++;
  } else {
    currentAvailableServer = 0;
  }
};

export const getHost = () => {
  return hosts[currentAvailableServer];
};

export const getHostsCount = () => hosts.length;
