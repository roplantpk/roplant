const mongoose=require("mongoose")
const bankAccountSchema=mongoose.Schema({
    bankAccountDate:{type:Date,required:true},
    bankAccountCode:{type:String,required:true},
    bankAccountDescription:{type:String,required:true},
    bankAccountTitle:{type:String,required:true},
    bankAccountNo:{type:String,required:true},
    bankAccountBranchCode:{type:String,required:true},
    bankAccountContactPerson:{type:String,required:true},
    bankAccountContactNo:{type:String,required:true}
    // bankAccountStatus:{type:Boolean,required:true},
})
module.exports=mongoose.model("bankAccount",bankAccountSchema)