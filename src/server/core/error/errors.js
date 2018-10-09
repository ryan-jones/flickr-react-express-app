const httpStatus = require('http-status');

const buildMessage = (statusCode, message = '') => {
  return message ? `${httpStatus[statusCode]} - ${message}` : httpStatus[statusCode];
};

const buildError = (statusCode = 500, err) => {
  let message = err;

  if (typeof err !== 'string') {
    message = err ? err.message : 'Unknown error';
  }

  const error = new Error(buildMessage(statusCode, message));
  error.name = 'API Error';
  error.code = statusCode.toString();

  if (!error.stack) {
    Error.captureStackTrace(this, this);
  }

  return error;
};

const badRequest = err => buildError(400, err);

const forbidden = err => buildError(403, err);

const notFound = err => buildError(404, err);

const internal = err => buildError(500, err);

const unavailable = err => buildError(503, err);

module.exports = {
  badRequest, forbidden, notFound, internal, unavailable
}