var mongoose=require('mongoose');
var EvenementSchema=mongoose.Schema({

    nom: {
        type :String,
        required: true
    } ,

    date :{
        type : Date,

        required: true
    },


});


var Evenement = mongoose.model('Evenement',EvenementSchema);

module.exports = Evenement;