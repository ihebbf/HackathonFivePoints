var express = require('express');
var router = express.Router();
var rating = require('../model/Rating');

/* GET users listing. */
router.get('/avgRating', function (req, res, next) {
    var sum, avg = 0;
    rating.find({}).exec((err, data) => {
        if (err)
            console.log(err);
        else {

            var service_papperasse = [];
            var ticket = [];
            data.forEach(e => {
                if (e.categorie == "ticket") {
                    ticket.push(e);
                } else {
                    service_papperasse.push(e);
                }
            });
            sum_ticket = 0;
            for (var i = 0; i < ticket.length; i++) {
                sum_ticket += ticket[i].score; //don't forget to add the base
            }

            avg = sum_ticket / ticket.length;

            sum_service = 0;
            for (var i = 0; i < service_papperasse.length; i++) {
                sum_service += service_papperasse[i].score; //don't forget to add the base
            }

            avg_service = sum_service / service_papperasse.length;


            res.send({
                avg_ticket: avg.toFixed(2),
                avg_service: avg_service.toFixed(2)
            });
        }
        // res.send(ticket);
    });

});

router.post('/addRating', async (req, res) => {


    var obj = {
        categorie: req.body.categorie,
        score: req.body.score,
    };

    rating.insertMany(obj);
    res.send('ok')

});

module.exports = router;
