import EventManager from './eventManager';

export default class Altum {
  constructor(productId, userId) {
    if (this._instance) {
      throw new Error('Altum is already initialized.');
    }

    if (!productId || !userId) {
      throw new Error('ProductId and UserId should be provided.');
    }

    Altum._instance = this;
    this._eventManager = new EventManager(productId, userId);
  }

  static init = (productId, userId) => {
    const altum = new Altum(productId, userId);
    return altum;
  }

  eat = (event, group=null, count=0, data={}, time=null) => {

    this._eventManager.add({
      event,
      group,
      count,
      data,
      time
    });
  }
}
