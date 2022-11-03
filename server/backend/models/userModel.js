const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    userName:{type:String, required:true},
    userEmail:{type:String, unique:true, required:true},
    userPassword:{type:String, require:true}
})

module.exports = mongoose.model("User", userSchema)