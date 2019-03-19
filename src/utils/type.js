export const isString = value => {
  return typeof value === 'string' || value instanceof String;
}

export const isObject = value => {
  return typeof(value) === 'object' && value !== null;
}
