import EventManager from './eventManager';

let instance = null;

export default class Altum {
  constructor(productId, userId) {
    if(!instance){
      instance = this;
    }

    if (!productId || !userId) {
      throw new Error('ProductId and UserId should be provided.');
    }

    this._eventManager = new EventManager(productId, userId);
  }

  static init = (productId, userId) => {

    const altum = new Altum(productId, userId);
    return altum;
  }

  log = (event, groups=[], count=0, data={}, time=null) => {

    this._eventManager.add({
      event,
      groups,
      count,
      data,
      time
    });
  }
}
