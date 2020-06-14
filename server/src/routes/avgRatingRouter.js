const router = require('express').Router();
const {DOCTOR_ROUTE} = require('../utils/constants');
const getAvgDoctorRating = require('./doctors/getAvgDoctorRating');

router.use(DOCTOR_ROUTE, getAvgDoctorRating);

module.exports = router; 