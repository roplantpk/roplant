const mongoose = require("mongoose")

const purchaseDeliveryOrderSchema = mongoose.Schema({
    EntryDate: {type:Date, required:true},
    WONo: {type:String, required:true},
    Quantity: {type:String, required:true},
    NOI: {type:String, required:true},
    RemarksOnWorkOrder: {type:String, required:true}
})

module.exports = mongoose.model("PurchaseDeliveryOrders",purchaseDeliveryOrderSchema)