const router = require('express').Router();

router.route('/:id').delete((req, res) => res.status(200));

module.exports = router;
