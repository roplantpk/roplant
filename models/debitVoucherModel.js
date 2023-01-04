const mongoose = require("mongoose")

const debitVoucherSchema = mongoose.Schema({
        Category:{type:String, required:true},
        VoucherNo:{type:String, required:true},
        OfficialParty:{type:String, required:true},
        EntryDate:{type:Date, required:true},
        DrHeadOfAccount:{type:String, required:true},
        DrSubHeadOfAccount:{type:String, required:true},
        Amount:{type:String, required:true},
        SelectHeadOfAccount:{type:String, required:true},
        ControlAccount:{type:String, required:true},
        DebitAmount:{type:String, required:true},
        CreditAmount:{type:String, required:true},
        ChequeNo:{type:String, required:true},
        BankName:{type:String, required:true},
        ChequeDate:{type:String, required:true},
        amount:{type:String, required:true},
        Remarks:{type:String, required:true},
})

module.exports = ("DebitVouchers", debitVoucherSchema)