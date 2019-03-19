//import { post } from '../api/request';
import { post } from '../api/debug';
import endpoints from './endpoints';

export const saveEvents = async(productId, events) => {
  await post(endpoints.SAVE_EVENTS, {
    productId,
    events
  });
}
