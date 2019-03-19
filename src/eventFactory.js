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

const getGroupObj = value => {
  let data = {
    group: isObject(value) && value.group || 
           isString(value) && value || ''
  };

  return data;
}

class EventFactory {
  static createEvent({id, event, group, count, data, time}) {
    const eventObj = {
              id,
              event: getEventType(event),
              group: getGroupObj(group),
              count,
              data,
              time: getTimeStamp(time)
            };

      return eventObj;
  }
}

export default EventFactory;
