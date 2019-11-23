var express = require('express');
var router = express.Router();
var evenement = require('../model/Evenement');

router.get('/getEvenements', (req, res) => {
    var evenements =evenement.find({})
        .exec((err, data) => {
            if (err)
                console.log(err)
            else {
                res.send(data);
            }
        })
});

router.post('/addEvenement',  (req, res) => {
    var obj = {
        nom: req.body.nom,
        date: req.body.date,


    };
    evenement.insertMany(obj);

    res.send(obj);

});

module.exports = router;
