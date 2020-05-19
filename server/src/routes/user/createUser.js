const router = require('express').Router();

router.post("/:id", checkJwt, (req, res) => {

    return res.status(200);
});

module.exports = router;