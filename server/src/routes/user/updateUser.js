const router = require('express').Router();

router.route('/:id').put((req, res) => res.status(200));

module.exports = router;
