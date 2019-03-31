import { ERRORS } from './const';

export default class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.name = ERRORS.VALIDATION;
    if ("captureStackTrace" in Error)
      Error.captureStackTrace(this, ValidationError);
    else
      this.stack = (new Error()).stack;
  }
}
