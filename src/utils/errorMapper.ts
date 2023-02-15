import { CONSTANTS } from '../contsants';
import { CustomError } from '../errors';

const errorMapper = (error: unknown): string => {
  if (!(error instanceof CustomError)) {
    return CONSTANTS.ERRORS.MESSAGES.GENERIC_ERROR;
  }
  return error.message;
};

export { errorMapper };
