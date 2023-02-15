import { CONSTANTS } from '../contsants';
import { CustomError } from './CustomError';

class NotAuthorizedError extends CustomError {
  constructor() {
    super(CONSTANTS.ERRORS.MESSAGES.NOT_AUTTHORIZED);
  }
}

export { NotAuthorizedError };
