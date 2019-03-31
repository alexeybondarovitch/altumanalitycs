import {
  isString,
  isObject,
} from '@utils/type';


export const parseEventType = event => {
  const eventType = isObject(event) && event.type ||
    isString(event) && event;

  return eventType;
}

export const parseTimeStamp = testValue => {
  let timeStamp = null;

  if (isString(timeStamp)) {
    timeStamp = Date.parse(testValue);
  } else if (Number.isSafeInteger(testValue) && testValue > 0) {
    timeStamp = testValue;
  }
  if (isNaN(timeStamp) || !timeStamp) {
    timeStamp = new Date().getTime();
  }

  return timeStamp;
}

export const parseCount = testValue => {
  let count = testValue;

  if (isString(count)) {
    count = Number(count);
  }

  return count;
}
