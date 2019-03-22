import 'core-js/stable';
import Altum from './altum';

const alt = window.Altum;
if (alt && alt.config) {
  const { delayed, config: { productId, userId } } = alt;
  Object.assign(alt, Altum.init(productId, userId));
}
