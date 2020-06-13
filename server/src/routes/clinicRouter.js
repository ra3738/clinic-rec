const router = require('express').Router();
const {CLINIC_ROUTE} = require('../utils/constants');
const getClinicsInCity = require('./clinics/getClinicsInCity');

router.use(CLINIC_ROUTE, getClinicsInCity);

module.exports = router;