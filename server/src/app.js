const express = require('express');
const cors = require('cors');
const expressPino = require('express-pino-logger');
const path = require('path');
const logger = require('./utils/logger');
const { ENVIRONMENT } = require('./utils/constants');
require('dotenv').config();

const expressLogger = expressPino({ logger });

const app = express();

app.use(expressLogger);
app.use(cors());
app.use(express.json());

const { BASE_ROUTE } = require('./utils/constants');
const userRouter = require('./routes/userRouter');
const clinicRouter = require('./routes/clinicRouter');
const avgRatingRouter = require('./routes/avgRatingRouter');
const avgBillRouter = require('./routes/avgBillRouter');
const deletePatientRouter = require('./routes/deletePatientRouter');

app.use(BASE_ROUTE, userRouter);
app.use(BASE_ROUTE, clinicRouter);
app.use(BASE_ROUTE, avgRatingRouter);
app.use(BASE_ROUTE, avgBillRouter);
app.use(BASE_ROUTE, deletePatientRouter);

if (ENVIRONMENT === 'production' || ENVIRONMENT === 'dev') {
  app.use('/static', express.static(path.join(`${__dirname}/../../`, 'client/build/static')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../../`, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
