const db = require('../db/db');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
    extended: true
}));

//BEGIN ROUTES

//Add one circus
router.post('/circus', (req, res) => {
    const formData = req.body;
    db.query('INSERT INTO circus set ?', formData, (err, results) => {
        if(err){
            res.status(500).send('Erreur pendant la création du cirque');
            return;
        }  
        if(!results){
            res.status(400).send();
        } else {
            db.query('SELECT * FROM circus WHERE id = ?', results.insertId, (err, results) => {
                if(err){
                    res.status(500).send();
                } else {
                    res.status(201).send(results[0]);
                }
            })
        }
    })
})












//END ROUTE
module.exports = router;
