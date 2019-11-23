var mongoose=require('mongoose');
var DemandeSchema=mongoose.Schema({

    categorie: {
        type :String,
        required: true
    } ,

    idVoucher :{
        type : String,

        required: true
    },



});


var Demande = mongoose.model('Demande',DemandeSchema);

module.exports = Demande;