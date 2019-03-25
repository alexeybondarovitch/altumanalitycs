import EventManager from './eventManager';

let _instance = null;

const _init = (instance, productId, userId) => {

  _instance = instance;

  instance._eventManager = new EventManager(productId, userId);
  instance.log = function(event, groups = [], count = 0, data = {}, time = null) {
    this._eventManager.add({
      event,
      groups,
      count,
      data,
      time
    });
  }
}

export default class Altum {
  constructor() { }

  static init = (productId, userId, globalInstance) => {
    if (!productId || !userId) {
      throw new Error('ProductId and UserId must be provided.');
    }
  
    if (_instance) {
      return _instance;
    }

    if (globalInstance) {
      globalInstance.prototype = Object.create(Altum.prototype);
    }

    _init(globalInstance || new Altum(), productId, userId);
    return _instance;
  }
}
