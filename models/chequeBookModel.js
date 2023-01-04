const mongoose=require("mongoose")

const chequeBookSchema=mongoose.Schema({
    accountTitle:{type:String,require:true},
    chequeNo:{type:String,require:true}
})

module.exports=mongoose.model("ChequeBook",chequeBookSchema)
