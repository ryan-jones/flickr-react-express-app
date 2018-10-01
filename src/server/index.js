const express = require('express');
const app = express();
const indexRouter = require('./routes');
const config = require('config');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const { port } = config.get('server');

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
app.use(cookieParser());

// app.use(express.static('dist'));
app.use('/api', indexRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));