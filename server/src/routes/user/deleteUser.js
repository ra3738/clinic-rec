const router = require('express').Router();

router.route("/:id").delete((req, res) => {
    return res.status(200);
});

module.exports = router;