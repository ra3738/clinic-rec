const router = require('express').Router();
const sqlClient = require('../../utils/sqlClient');

router.get("/getAvgDoctorRating/:specialty", (req, res) => {
    //const doctorSpecialty = req.params.specialty; 
    const query = 'select did, avg(stars) from public.rating r group by did;'
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