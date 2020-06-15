const BASE_ROUTE = '/api';
const USER_ROUTE = '/users';
const UPLOAD_ROUTE = '/uploads';
const CLINIC_ROUTE = '/clinic';
const PATIENT_ROUTE = '/patient';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

module.exports = {
  BASE_ROUTE,
  USER_ROUTE,
  UPLOAD_ROUTE,
  ENVIRONMENT,
  CLINIC_ROUTE,
  PATIENT_ROUTE
};