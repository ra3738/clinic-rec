/* eslint-disable import/no-unresolved */
const router = require('express').Router();
const { BILL_ROUTE } = require('../utils/constants');
const getBills = require('./user/getBills');
const avgBillForPatient = require('./user/avgBillForPatient');

router.use(BILL_ROUTE, getBills);
router.use(BILL_ROUTE, avgBillForPatient);

module.exports = router;
