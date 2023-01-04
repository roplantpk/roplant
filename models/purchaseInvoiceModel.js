const mongoose = require("mongoose")

const purchaseInvoiceSchema = mongoose.Schema({
    entryDate: {type:Date, required:true},
    partyName: {type:String, required:true},
    DONo: {type:String, required:true},
    totalAmount: {type:String, required:true},
    Remarks:{type:String, required:true},
   
})

module.exports = mongoose.model("PurchaseInvoices", purchaseInvoiceSchema)