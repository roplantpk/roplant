const mongoose=require("mongoose")
const accountLevelSchema=mongoose.Schema({
    accountcode:{type:String,required:true},
    accountlevel3Code:{type:String,required:true},
    accountlevel3Description:{type:String,required:true},
    accountdescription:{type:String,required:true},
    accountStatus:{String:Boolean}
})
module.exports=mongoose.model("accountLevel3",accountLevelSchema)