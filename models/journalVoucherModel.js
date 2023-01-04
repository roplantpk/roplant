const mongoose = require("mongoose")

const journalVoucherSchema = mongoose.Schema({
        JVDate:{type:Date, required:true},
        VoucherNo:{type:String, required:true},
        DebitHeadofAccount:{type:String, required:true},
        DebitControlAccount:{type:String, required:true},
        CreditHeadOfAccount:{type:String, required:true},
        CreditControlAccount:{type:String, required:true},
        Amount:{type:String, required:true},
        Total:{type:String, required:true}
})

module.exports = mongoose.model("JournalVouchers", journalVoucherSchema)