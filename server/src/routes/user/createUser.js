const router = require('express').Router();

router.get("/:id", (req, res) => {

    return res.send(200);
});

module.exports = router;