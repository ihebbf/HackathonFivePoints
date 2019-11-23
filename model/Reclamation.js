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

    date: {
        type: Date,
        required: true
    },

    commission: {
        type: String,
        required: true
    },


   image: {
        type: String,
        required: true
    },

    etat :{
        type : String,
        required : true

    }


});


var reclamation = mongoose.model('Reclamation', ReclamationSchema);

module.exports = reclamation;