const mongoose = require("mongoose")


const departmentSchema = mongoose.Schema({
    deptID:{type:String, unique:true, required:true},
    deptDescription:{type:String, unique:true, required:true},
    deptIncharge:{type:String, required:true},
    deptStatus:{type:String, required:true}
})

module.exports = mongoose.model("Departments", departmentSchema)