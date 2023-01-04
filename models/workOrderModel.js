const mongoose = require("mongoose")

const WorkOrderSchema = mongoose.Schema({
        EntryDate: {type:Date, required:true},
        WONo: {type:String, required:true},
        PlantDescription: {type:String, required:true},
        NOI: {type:String, required:true},
        ItemName: {type:String, required:true},
        PrimaryUnit: {type:String, required:true},
        Quantity: {type:String, required:true},
        Remarks: {type:String, required:true},
})

module.exports = mongoose.model("WorkOrders", WorkOrderSchema)