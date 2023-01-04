const mongoose=require("mongoose")
const expenseControlSchema=mongoose.Schema({
    headOfAccount:{type:String,required:true},
    controlAccount:{type:String,required:true}
})
module.exports=mongoose.model("expenseControl",expenseControlSchema)