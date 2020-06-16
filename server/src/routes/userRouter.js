const router = require('express').Router();
const createUserRoute = require('./user/createUser');
const readUserRoute = require('./user/readUser');
const updateUserRoute = require('./user/updateUser');
const deleteUserRoute = require('./user/deleteUser');
const { USER_ROUTE } = require('../utils/constants');

router.use(USER_ROUTE, createUserRoute);
router.use(USER_ROUTE, readUserRoute);
router.use(USER_ROUTE, updateUserRoute);
router.use(USER_ROUTE, deleteUserRoute);

module.exports = router;
