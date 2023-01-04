const mongoose=require("mongoose")
const employeeSchema=mongoose.Schema({
    employeeId:{type:String,require:true},
    employeeName:{type:String,require:true},
    employeeDepartment:{type:String,require:true},
    employeeDesignation:{type:String,require:true},
    employeeCNICNo:{type:String,require:true},
    employeeEmergencyContactPerson:{type:String,require:true},
    employeeEmergencyContactNo:{type:String,require:true},
    employeeArrivalTime:{type:Date,require:true},
    employeeCheckOutTime:{type:Date,require:true},
    employeeSalary:{type:String,require:true},
    employeeYearySalary:{type:String,require:true},
    employeeTaxAmmount:{type:String,require:true},
    employeeExtra:{type:String,require:true},
    employeePercantage:{type:String,require:true},
    employeeYearlyTax:{type:String,require:true},
    employeeTaxMonth:{type:String,require:true},
    employeeLeaveInCase:{type:Boolean,require:true},
    employeeStatus:{type:Boolean,require:true}
})

module.exports=mongoose.model("employee",employeeSchema)