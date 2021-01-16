export class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 400;
    }
    if (this instanceof NotFound) {
      return 404;
    }
    return 500;
  }
}

export class BadRequest extends GeneralError {}
export class NotFound extends GeneralError {}

export const handleErrors = (err: Error, _, res) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message,
    });
  } else {
    return res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};
