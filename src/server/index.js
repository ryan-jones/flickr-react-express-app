const express = require('express');
const indexRouter = require('./routes');
const config = require('config');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const connectTimeout = require('connect-timeout');
const responseTime = require('response-time');
const ErrorHandlers = require('./core/error');
const { port, timeout } = config.get('server');

const app = express();
app.disable('x-powered-by');

app.use(express.static('build'));
app.use(helmet());
app.use(compression());
app.use(connectTimeout(timeout));
app.use(responseTime());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, DELETE, GET');
    res.status(200).json({})
  }
  next();
})
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', indexRouter);

app.use((req, res, next) => {
	next(ErrorHandlers.errors.notFound('Unknown endpoint'));
});

// Handle All other API errors
app.use(ErrorHandlers.errorHandler);


app.listen(port, () => console.log(`Listening on port ${port}!`));
