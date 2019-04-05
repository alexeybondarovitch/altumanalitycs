import { EventManager } from './event/eventManager';
import { InitializationError } from '@errors';

class AltumAnalytics {
  constructor() {
    this._initialized = false;
    this._eventManager = null;
  }

  init = (config) => {
    //lib is already initialized
    if (this._initialized) {
      throw new InitializationError('Altum is already initialized.');
    }

    this._initialized = true;
    const { productId, userId } = config || {};

    if (!productId) {
      throw new InitializationError('ProductId must be provided.');
    }
    this._eventManager = new EventManager(productId, userId);
    return this;
  }

  log = (event, count = 1, options = {}) => {
    if (!this._eventManager) {
      throw new InitializationError('Altum is not initialized.');
    }

    this._eventManager.add({
      event,
      count,
      ...options
    });
  }
}

const _initFromWindow = () => {
  const _altum = window && window.Altum;

  if (!_altum) {
    return;
  }

  if (_altum._initialized) {
    //lib is already initialized
    return _altum;
  }

  const { config, delayed = [] } = _altum;
  const instance = new AltumAnalytics();

  instance.init(config);

  // we don't want to remove already existing link to Altum, so just copy all fields
  Object.keys(_altum).forEach(key => {
    delete _altum[key];
  });

  Object.assign(
    _altum,
     Object.create(Object.getPrototypeOf(instance)),
    instance
  );

  delayed.forEach(([args, timeStamp]) => {
    const [event, count, options = {}] = [...args];
    options.time = options.time || timeStamp;
    _altum.log(event, count, options);
  });

  return _altum;
}

const instance = _initFromWindow() || new AltumAnalytics();

if (window) {
  window.Altum = window.Altum || instance;
}

export const Altum = instance;
