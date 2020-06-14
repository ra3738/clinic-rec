const router = require('express').Router();
const {AVG_RATING_ROUTE} = require('../utils/constants');
const getAvgDoctorRating = require('./clinics/getAvgDoctorRating');

router.use(AVG_RATING_ROUTE, getAvgDoctorRating);

module.exports = router;