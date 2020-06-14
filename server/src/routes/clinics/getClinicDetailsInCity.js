const router = require('express').Router();
const sqlClient = require('../../utils/sqlClient');

router.get("/getClinicDetailsInCity/:city", (req, res) => {
    const cityName = req.params.city; 
    const query = 'select * from public.clinic c, public.cliniclocation cl where cl.city = $1 and c.postal_code = cl.postal_code;'
    sqlClient.query(query, [cityName], 
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