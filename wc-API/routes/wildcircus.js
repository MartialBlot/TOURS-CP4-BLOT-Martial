const db = require('../db/db');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const passport = require('passport');

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
            res.status(500).json('Erreur pendant la création du cirque');
            return;
        }  
        if(!results){
            res.status(400).json();
        } else {
            db.query('SELECT * FROM circus WHERE id = ?', results.insertId, (err, results) => {
                if(err){
                    res.status(500).json();
                } else {
                    res.status(201).json(results[0]);
                }
            })
        }
    })
})

//Send a message
router.post('/messages', (req, res) => {
    const formData = req.body;
    db.query('INSERT INTO messages set ?', formData, (err, results) => {
        if(err){console.log(err)
            res.status(500).json("Erreur lors de l'envoi du message");
            return;
        }  
        if(!results){
            res.status(400).json();
        } else {
            db.query('SELECT * FROM messages WHERE id = ?', results.insertId, (err, results) => {
                if(err){
                    res.status(500).json();
                } else {
                    res.status(201).json(results[0]);
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
            res.status(500).json('Erreur lors de la récupération du cirque');
        } 
        if (!results.length) {
            res.status(404).json();
        } else {
            res.status(200).json(results);
        }
    })
});

//Get infos by id
router.get('/infos/:id', (req, res) =>{
    const id = req.params.id;
    db.query('SELECT * FROM infos WHERE id = ?', id, (err, results) => {
        if(err){
            res.status(500).json('Erreur lors de la récupération de l info');
        } 
        if (!results.length) {
            res.status(404).json();
        } else {
            res.status(200).json(results);
        }
    })
});

//Post infos
router.post('/infos', passport.authenticate('jwtUrl', { session: false }), (req, res) => {
    const formData = req.body;
    db.query('INSERT INTO infos set ?', formData, (err, results) => {
        if(err){
            res.status(500).json('Erreur lors de la création des infos');
            return;
        } if (!results) {
            res.status(400).json();
        } else {
            db.query('SELECT * FROM infos WHERE id = ?', results.insertId, (err, results) => {
                if(err){
                    res.status(500).json();
                } else {
                    res.status(201).json(results[0]);
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
            res.status(500).json('Erreur lors de la récupération du message');
        } 
        if (!results.length) {
            res.status(404).json();
        } else {
            res.status(200).json(results);
        }
    })
});

//Read infos by circus id
router.get('/circus/:id/infos', (req, res) =>{
    const id = req.params.id;
    db.query('SELECT * FROM infos WHERE circus_id = ?', id, (err, results) => {
        if(err){
            res.status(500).json('Erreur lors de la récupération des infos');
        } 
        if (!results.length) {
            res.status(404).json();
        } else {
            res.status(200).json(results);
        }
    })
});

//Show all circus
router.get('/circus', passport.authenticate('jwt', { session: false }), (req, res) => {
    db.query('SELECT * FROM circus', (err, results) => {
        if(err){
            res.status(500).json('Erreur lors de la récupération des cirques');
        } else {
            res.status(200).json(results);
        }
    })
});

//Edit circus
router.put('/circus/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    db.query('UPDATE circus SET ? WHERE id = ?', [formData, id], err => {
        if (err) {
            res.status(500).json("Erreur lors de la modification du cirque");
        } else {
        db.query('SELECT * FROM circus WHERE id = ?', id, (err, results) => {
            if (err) {
                res.status(500).json();
            } else {
            res.status(200).json(results[0]);
                }
            })
        }
    });
});

//Edit infos circus
router.put('/infos/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    db.query('UPDATE infos SET ? WHERE id = ?', [formData, id], err => {
        if (err) {
            res.status(500).json("Erreur lors de la modification des infos");
        } else {
        db.query('SELECT * FROM infos WHERE id = ?', id, (err, results) => {
            if (err) {
                res.status(500).json();
            } else {
            res.status(200).json(results[0]);
                }
            })
        }
    });
});

//Delete circus
router.delete('/circus/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM circus WHERE id = ?', id, err => {
        if(err){
            console.log(err)
            res.status(500).json('Erreur lors de la suppression');
        } else {
            res.status(204).json();
        }
    })
});

//Delete infos
router.delete('/infos/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM infos WHERE id = ?', id, err => {
        if(err){
            console.log(err)
            res.status(500).json('Erreur lors de la suppression');
        } else {
            res.status(204).json();
        }
    })
});

//Delete message
router.delete('/messages/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM messages WHERE id = ?', id, err => {
        if(err){
            console.log(err)
            res.status(500).json('Erreur lors de la suppression');
        } else {
            res.status(204).json();
        }
    })
});

//END ROUTE
module.exports = router;
