import EventManager from './event/eventManager';
import { InitializationError } from '@errors';


const _init = (instance, config) => {

  const { productId, userId } = config;

  if (!productId) {
    throw new InitializationError('ProductId must be provided.');
  }

  instance.initialized = true;
  instance._eventManager = new EventManager(productId, userId);

  instance.log = function (event, count = 1, options = {}) {
    this._eventManager.add({
      event,
      count,
      ...options
    });
  }

  return instance;
}

const _initGlobal = () => {
  const altum = window.Altum;

  if (!altum) return;

  const { config, delayed = [] } = altum;
  Altum.init(config);

  delayed.forEach(([args, timeStamp]) => {
    const [event, count, options = {}] = [...args];
    options.time = options.time || timeStamp;
    altum.log(event, count, options);
  });
}

class Altum {
  static init = (config) => {
    const _instance = window.Altum || {};

    //lib is already initialized
    if (_instance.initialized) {
      throw new InitializationError('Altum is already initialized.');
    }
    const _config = config || {};
    const altum = window.Altum = _init(_instance, _config);


    return altum;
  }
}

_initGlobal();

export default Altum;
