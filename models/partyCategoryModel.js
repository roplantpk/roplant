const mongoose = require("mongoose")

const partyCategorySchema = mongoose.Schema({
    sub_Chart_Of_Account:{type:String, required:true},
    Head_Of_Account:{type:String, required:true}
})

module.exports = mongoose.model("PartyCategorys", partyCategorySchema)