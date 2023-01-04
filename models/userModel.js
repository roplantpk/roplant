const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true, "Please Add Name Field"]
    },
    userEmail:{
        type:String,
        required:[true, "Please Add Name Field"],
        unique:true
    },
    userPassword:{
        type:String,
        required:[true, "Please Add Name Field"]
    }
})

module.exports = mongoose.model("User",userSchema)