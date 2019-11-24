var mongoose = require('mongoose');
var ReclamationSchema = mongoose.Schema({

    objet: {
        type: String,

        required: true
    },

    message: {
        type: String,
        required: true
    },
    ref:{
        type: String,
    },

    date: {
        type: Date,
        default:Date.now(),
        required: true
    },

    commission: {
        type: String,
        default:'aucune',
        required: true
    },


   image: {
        type: String,
        required: true
    },

    etat :{
        type : String,
        default:'Non traité',
        required : true

    }


});


var reclamation = mongoose.model('Reclamation', ReclamationSchema);

module.exports = reclamation;
