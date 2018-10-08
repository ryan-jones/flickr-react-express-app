const errors = require('./errors');

const cleanError = (err) => err.code ? err : errors.internal(err);

module.exports = (err, req, res, next) => {
  err = cleanError(err);

  const response = {
    code: err.code || err.status || 500,
    message: err.message
  };
  res.status(err.code).json(response);
  res.end();
};