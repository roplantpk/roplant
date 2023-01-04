const mongoose = require("mongoose")

const taxesSchema = mongoose.Schema({
    gst:{type:String, required:true},
    taxDescription:{type:String, required:true},
    taxRate:{type:String, required:true},
    // deptStatus:{type:Boolean, required:true}
})

module.exports = mongoose.model("Taxes", taxesSchema)