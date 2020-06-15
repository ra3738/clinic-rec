const router = require('express').Router();
const sqlClient = require('../../utils/sqlClient');

router.get("/deletePatientAccount/:patientid", (req, res) => {
    const patientId = req.params.patientid;
    // const text = 'insert into patient(id, mid, email, password, full_name, profile_picture_url) values($1, $2, $3, $4, $5, $6)'
    // const values = [6, 6, 'email', 'password', 'name', 'url']
    // const query = { text: 'insert into patient(id, mid, email, password, full_name, profile_picture_url) values($1, $2, $3, $4, $5, $6)', 
    //                 values: [6, 6, 'email', 'password', 'name', 'url'],
    // }
    
    const text = 'insert into public.rating(id, description, stars, did) values($1, $2, $3, $4) RETURNING *;'
    const values = ['6', 'Great', 5, '1000']
    sqlClient.query(text, values,
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

    const query1 = 'select * from public.rating;'
    sqlClient.query(query1,
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