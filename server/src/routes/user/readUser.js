const router = require('express').Router();
const sqlClient = require('../../utils/sqlClient');
const logger = require('../../utils/logger');

router.get("/patient/:id", async (req, res) => {
    try {
        const result = await sqlClient.query(`SELECT * FROM PATIENT WHERE id='${req.params.id}' LIMIT 1`);
        if (result) {
            res.json({
                status: 200,
                message: `GET /patient/:id successfully retrieved.`,
                data: result.rows[0],
            });
            return;
        }
    } catch(err) {
        logger.debug(`Error reading patient with id ${req.params.id}, error: ${err}`);
    }
    return res.status(400);
});

module.exports = router;