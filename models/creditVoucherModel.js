const mongoose = require("mongoose")

const creditVoucherSchema =  mongoose.Schema({
        VoucherNo:{type:String, required:true},
        EntryDate:{type:Date, required:true},
        partyName:{type:String, required:true},
        amount:{type:String, required:true},
        officialParty:{type:String, required:true},
        SelectHeadOfAccount:{type:String, required:true},
        ControlAmount:{type:String, required:true},
        DebitAmount:{type:String, required:true},
        CreditAmount:{type:String, required:true},
        BankName:{type:String, required:true},
        ChequeNo:{type:String, required:true},
        ChequeDate:{type:Date, required:true},
        ChequeAmount:{type:String, required:true},
        Remarks:{type:String, required:true},
})
module.exports = mongoose.model("CreditVouchers", creditVoucherSchema)