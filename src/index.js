import 'core-js/stable';
import Altum from './altum';

((window) => {
  const alt = window.Altum;
  if (alt && alt.config) {
    const { delayed, config: { productId, userId } } = alt;
    Altum.init(productId, userId, alt);
    if (Array.isArray(delayed)) {
      delayed.forEach(([methodArgs, timeStamp]) => {
        const args = Array.prototype.slice.call(methodArgs);
        args[4] = args[4] || timeStamp;
        alt.log.apply(alt, args)
      });
    }
  }
})(window);
