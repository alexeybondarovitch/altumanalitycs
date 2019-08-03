import { InitializationError } from "@errors";
import { ERROR_MESSAGES } from "@errors/const";
import { Logger } from "@utils/logger";
import { EventManager } from "./event/eventManager";
import { DEFAULT_EVENTS } from "./event/const";
import { initHost } from "./services/api/host";

let _config = {
  userId: null,
  productId: null,
  options: {}
};

let _eventManager = null;

class AltumAnalytics {
  init(config) {
    this._initialized = true;

    // if Altum was already in use, flush the buffer
    if (_eventManager) {
      _eventManager.dispose();
    }

    // override previous settings
    _config = { ..._config, ...config };

    const { productId, userId, options } = config;

    if (!productId || !userId) {
      throw new InitializationError("ProductId and UserId must be provided.");
    }

    try {
      initHost(productId, () => {
        _eventManager = new EventManager(productId, userId, options || {});
        _eventManager.add({
          event: DEFAULT_EVENTS.SESSION_START,
          count: 1,
          groups: ["session"]
        });
      });
    } catch (err) {
      Logger.error(ERROR_MESSAGES.INITIALIZATION_ERROR);
    }
  }
}

const _initFromWindow = () => {
  const altum = window.Altum;

  if (!altum) {
    return;
  }

  if (altum._initialized) {
    //lib is already initialized
    return altum;
  }

  const { c = {} /*config*/ } = altum;

  Object.keys(altum).forEach(function(key) {
    delete altum[key];
  });
  Object.setPrototypeOf(altum, Object.getPrototypeOf(new AltumAnalytics()));
  altum.init(c);
  return altum;
};

const instance = (window.Altum = _initFromWindow() || new AltumAnalytics());

export const Altum = instance;
