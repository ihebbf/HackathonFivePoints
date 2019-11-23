var mongoose=require('mongoose');
var RatingSchema=mongoose.Schema({

   score: {
        type :Number,
        required: true
    } ,

    categorie: {
        type :String,
        required: true
    }
});


var Rating = mongoose.model('Rating',RatingSchema);

module.exports = Rating;