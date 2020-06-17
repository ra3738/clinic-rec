const router = require('express').Router();
const {USER_ROUTE} = require('../utils/constants');
const getAvgUserBill = require('./user/getAvgUserBill');

router.use(USER_ROUTE, getAvgUserBill);

module.exports = router;