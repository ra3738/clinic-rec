const router = require('express').Router();
const {PATIENT_ROUTE} = require('../utils/constants');
const deletePatientAccount = require('./patients/deletePatientAccount');

router.use(PATIENT_ROUTE, deletePatientAccount);

module.exports = router;