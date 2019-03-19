import Altum from './altum';

((window) => {
  const { productId, userId } = window['AltumConfig'] || {};

  window.Altum = window.Altum || Altum.init(productId, userId);
})(window);
