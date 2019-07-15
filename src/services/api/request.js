import { Logger } from "@utils/logger";
import { ValidationError, ServerError } from "@errors";
import { ERROR_MESSAGES } from "./const";

const _createCORSRequest = (method, url, isAsync) => {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url, isAsync);
  } else {
    xhr = null;
  }
  return xhr;
};

export const post = (url, payload, isAsync = true) => {
  var xhr = _createCORSRequest("POST", url, isAsync);
  if (!xhr) {
    Logger.error(ERROR_MESSAGES.NOT_SUPPORTED_ERROR);
    return;
  }

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "text/plain");

  xhr.onload = function() {
    try {
      switch (xhr.status / 100) {
        case 4:
          throw new ValidationError(ERROR_MESSAGES.CLIENT_ERROR);
        case 5:
          throw new ServerError(ERROR_MESSAGES.SERVER_ERROR);
        default:
          return xhr.responseText;
      }
    } catch (err) {
      Logger.error(err);
    }
  };

  xhr.onerror = function() {
    Logger.error(ERROR_MESSAGES.SERVER_ERROR);
  };

  xhr.send(JSON.stringify(payload));
};
