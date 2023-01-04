const mongoose=require("mongoose")
const itemInformationSchema=mongoose.Schema({
    itemInformationCode:{type:String,required:true},
    itemInformationItemName:{type:String,required:true},
    itemInformationItemUnit:{type:String,required:true},
    itemInformationMinimum:{type:String,required:true},
    itemInformationMaximum:{type:String,required:true}
    // itemInformationItemStatus:{type:Boolean,required:true}

})
module.exports=mongoose.model("itemInformation",itemInformationSchema)