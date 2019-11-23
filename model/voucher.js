var mongoose=require('mongoose');
var VoucherSchema=mongoose.Schema({

    solde: {
        type :Number,
        required: true
    } ,

    reference :{
        type : String,

        required: true
    },


});


var voucher = mongoose.model('Voucher',VoucherSchema);

module.exports = voucher;