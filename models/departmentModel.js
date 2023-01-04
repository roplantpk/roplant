const mongoose = require("mongoose")

const departmentSchema = mongoose.Schema({
    deptCode:{type:String, required:true},
    deptDescription:{type:String,required:true},
    deptInscharge: {type:String, required:true},
    deptStatus:{type:Boolean},
})

module.exports = mongoose.model("Departments", departmentSchema)