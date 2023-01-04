const mongoose=require("mongoose")
const expenseHeadeSchema=mongoose.Schema({
    chartOfAccount:{type:String,required:true},
    headOfAccount:{type:String,required:true}
})
module.exports=mongoose.model("expenseHead",expenseHeadeSchema)