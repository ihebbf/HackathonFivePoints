var mongoose=require('mongoose');
var PersonneSchema=mongoose.Schema({

    nom: {
        type :String,
        required: true
    } ,

    prenom: {
        type :String,
        required: true
    } ,

    dateNaissance :{
        type : String,
        required: true

    },

    lieuNaissance: {
        type :String,
        required: true
    }
});


var Personne = mongoose.model('Personne',PersonneSchema);

module.exports = Personne;