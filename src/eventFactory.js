import { isString, isObject } from './utils/type';

const getEventType = event => {
  const eventType = isObject(event) && event.type || 
                    isString(event) && event || '';
  return eventType;
}

const getTimeStamp = testValue => {
  let timeStamp = null;
  if (isString(timeStamp)) {
    timeStamp = Date.parse(testValue);
  }else if (Number.isSafeInteger(testValue) && testValue > 0) {
    timeStamp = testValue;
  }

  if (isNaN(timeStamp) || !timeStamp) {
    timeStamp = new Date().getTime();
  }

  return timeStamp;
}

class EventFactory {
  static createEvent({id, event, groups, count, data, time}) {
    const eventObj = {
              id,
              event: getEventType(event),
              groups,
              count,
              data,
              time: getTimeStamp(time)
            };

      return eventObj;
  }
}

export default EventFactory;
