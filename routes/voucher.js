var express = require('express');
var router = express.Router();
var voucher = require('../model/Voucher');

router.post('/addVoucher',  (req, res) => {
    var obj = {
        reference: req.body.reference,
        solde: req.body.solde,

    };
    voucher.insertMany(obj);

    res.send(obj);

});


router.get('/getVouchers', (req, res) => {
    var vouchers =voucher.find({})
        .exec((err, data) => {
            if (err)
                console.log(err)
            else {
                res.send(data);
            }
        })
});




router.get('/modifierVoucher/:id/:dec', (req, res, next) => {
    let query = {"_id": req.params.id};
    voucher.findById(query, (err, data) => {
        if (err) {
            console.log(err);
        } else {
           if(data.solde<req.params.dec){
          res.send('solde insuffisant');

           }
else {
              data.solde=data.solde-req.params.dec;
               voucher.update({_id: req.params.id}, data, function (err,Voucher ) {
                if(err){
                    res.send(err);
                }
                else {
                    res.send(Voucher)
                }
               });
}
        }});


});
router.get('/update/:id', (req, res, next) => {
    let query = {"_id": req.params.id};
    console.log(query);
    user.findById(query, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('updateUser.twig', {obj: data});

        }
    });

});
module.exports = router;
