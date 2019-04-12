export const isString = value => {
  return typeof value === 'string' || value instanceof String;
}

export const isObject = value => {
  return typeof value === 'object' && value !== null;
}

export const isEmpty = value => {
  return value == null || value === '' || typeof value === 'undefined';
}

export const isNumber = value => !isNaN(value);

export const isTimeStamp = value => {
  return (new Date(value)).getTime() > 0;
}

export const isJson = value => {
  if (!isObject(value)){
    return false;
  }
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }
  return true;
}
