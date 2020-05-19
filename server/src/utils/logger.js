const pino = require('pino');
const { ENVIRONMENT } = require('./constants');

let pinoConfig = { level: process.env.LOG_LEVEL || 'info' };
if (ENVIRONMENT !== 'production') {
  pinoConfig = Object.assign(pinoConfig, { prettyPrint: { colorize: true } });
}
const logger = pino(pinoConfig);

module.exports = logger;