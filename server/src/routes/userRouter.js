const router = require('express').Router();
const createUserRoute = require('./users/createUser');
const readUserRoute = require('./users/readUser');
const updateUserRoute = require('./users/updateUser');
const deleteUserRoute = require('./users/deleteUser');
const { USER_ROUTE } = require('../utils/constants');

router.use(USER_ROUTE, createUserRoute);
router.use(USER_ROUTE, readUserRoute);
router.use(USER_ROUTE, updateUserRoute);
router.use(USER_ROUTE, deleteUserRoute);

module.exports = router;