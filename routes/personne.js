var express = require('express');
var router = express.Router();
var personne = require('../model/Personne');

router.get('/getPersonnes', (req, res) => {
    var personnes =personne.find({})
        .exec((err, data) => {
            if (err)
                console.log(err)
            else {
                res.send(data);
            }
        })
});

router.post('/addPersonne',  (req, res) => {
    var obj = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        lieuNaissance: req.body.lieu,
        dateNaissance: req.body.date,

    };
    personne.insertMany(obj);

    res.send(obj);

});

module.exports = router;
