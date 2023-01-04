const mongoose = require("mongoose")

const purchaseDeliverySchema = mongoose.Schema({
    EntryDate: {type:Date, required:true},
    PartyName: {type:String, required:true},
    DONo: {type:String, required:true},
    NOI: {type:String, required:true},
    Quantity:{type:String, required:true},
    StockLocation: {type:String, required:true},
})

module.exports = mongoose.model("PurchaseDeliverys",purchaseDeliverySchema)