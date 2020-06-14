const BASE_ROUTE = '/api';
const USER_ROUTE = '/users';
const UPLOAD_ROUTE = '/uploads';
const CLINIC_ROUTE = '/clinic';
const AVG_RATING_ROUTE = '/rating';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

module.exports = {
  BASE_ROUTE,
  USER_ROUTE,
  UPLOAD_ROUTE,
  ENVIRONMENT,
  CLINIC_ROUTE,
  AVG_RATING_ROUTE
};