const router = require('express').Router();
const sqlClient = require('../../utils/sqlClient');

router.get("/getAvgUserBill/", (req, res) => {
    const query = 'select amount from bill;'
    sqlClient.query(query, 
        (err, qres) => {
             if(err){
                return res.status(500);
                throw err; 
            }  
            else {
                res.send(qres.rows); 
                return res.status(200);
            } 
    });
});

module.exports = router; 