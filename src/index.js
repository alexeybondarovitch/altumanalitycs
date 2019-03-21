import 'core-js/stable';
import Altum from './altum';

((window) => {
  const alt = window.Altum;
  if (alt && alt.config) {
    const { delayed, config: { productId, userId } } = alt;
    window.Altum = Altum.init(alt, productId, userId);
  }
})(window);
