var express = require('express');
var router = express.Router();
var reclamation = require('../model/Reclamation');
var uuid =require('uuid-random');


/* GET users listing. */
router.get('/findAll', function(req, res, next) {

    reclamation.find({}).exec((err, data) => {
        if (err)
            console.log(err);
        else {

            res.send(data);
        }
    })
});

router.get('/findByRef', function(req, res) {

    reclamation.find({"ref":req.query.ref}).exec((err, data) => {
        if (err)
            console.log(err);
        else {
            res.send(data);
        }
    });

});

router.post('/addReclamation', async (req, res) => {
    var addy=uuid();
    var reference= addy.substr(0, addy.indexOf('-'));

    var obj = {
        objet: req.body.objet,
        message: req.body.message,
        image: req.body.image,
        ref:reference
    };
    reclamation.insertMany(obj);
   res.status(200).send(reference);

});

router.post('/updateReclamation', (req, res, next) => {
    var obj = {
        commission: req.body.commission,
        etat: req.body.etat,

    };

    reclamation.findOneAndUpdate({_id: req.body._id}, obj, {new: true}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
           res.send(data);
        }
    });
});

module.exports = router;
