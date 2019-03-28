import {
  isString,
  isObject,
} from './utils/type';

const getEventType = event => {
  const eventType = isObject(event) && event.type ||
                    isString(event) && event;

  if (!eventType){
    throw new Error('Event Type is required');
  }
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

const getCount = testValue => {
  let count = testValue;

if (isString(count)) {
    count = Number(count);
  }

  if (isNaN(count)) {
    throw new Error("Can't parse count value");
  }

  if (count <= 0) {
    throw new Error("Count must be non negative value");
  }

  return count;
}

class EventFactory {
  static createEvent({userId, event, groups, count, data, time}) {
    if (!userId) {
      throw new Error('userId must be provided');
    }
    const eventObj = {
              id: userId,
              event: getEventType(event),
              groups,
              count: getCount(count),
              data,
              time: getTimeStamp(time)
            };

      return eventObj;
  }
}

export default EventFactory;
