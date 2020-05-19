const router = require('express').Router();

router.route("/:id").get((req, res) => {
    return res.status(200);
});

module.exports = router;