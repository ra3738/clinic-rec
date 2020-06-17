const router = require('express').Router();
const sqlClient = require('../../utils/sqlClient');

router.get('/avgBillForPatient/:patientid', (req, res) => {
  const patientId = req.params.patientid;
  const query = 'select ROUND(avg(amount), 2) as amount from bill where patient_id = $1';
  sqlClient.query(query, [patientId],
    (err, qres) => {
      if (err) {
        return res.status(500);
      }

      res.send(qres.rows);
      return res.status(200);
    });
});

module.exports = router;
