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

//Send a message
router.post('/messages', (req, res) => {
    const formData = req.body;
    db.query('INSERT INTO messages set ?', formData, (err, results) => {
        if(err){
            res.status(500).send("Erreur lors de l'envoi du message");
            return;
        }  
        if(!results){
            res.status(400).send();
        } else {
            db.query('SELECT * FROM messages WHERE id = ?', results.insertId, (err, results) => {
                if(err){
                    res.status(500).send();
                } else {
                    res.status(201).send(results[0]);
                }
            })
        }
    })
});

//Get circus by id
router.get('/circus/:id', (req, res) =>{
    const id = req.params.id;
    db.query('SELECT * FROM circus WHERE id = ?', id, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération du cirque');
        } 
        if (!results.length) {
            res.status(404).send();
        } else {
            res.status(200).json(results);
        }
    })
});

//Post infos
router.post('/infos', (req, res) => {
    const formData = req.body;
    db.query('INSERT INTO infos set ?', formData, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la création des infos');
            return;
        } if (!results) {
            res.status(400).send();
        } else {
            db.query('SELECT * FROM infos WHERE id = ?', results.insertId, (err, results) => {
                if(err){
                    res.status(500).send();
                } else {
                    res.status(201).send(results[0]);
                }
            })
        }
    })
});

//Read message by circus id
router.get('/circus/:id/messages', (req, res) =>{
    const id = req.params.id;
    db.query('SELECT * FROM messages WHERE circus_id = ?', id, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors de la récupération de la playlist');
        } 
        if (!results.length) {
            res.status(404).send();
        } else {
            res.status(200).json(results);
        }
    })
});










//END ROUTE
module.exports = router;
