const router = require('express').Router();
const {CLINIC_ROUTE} = require('../utils/constants');
const getClinicDetailsInCity = require('./clinics/getClinicDetailsInCity');

router.use(CLINIC_ROUTE, getClinicDetailsInCity);

module.exports = router;