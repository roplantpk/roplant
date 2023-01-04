const mongoose = require("mongoose")

const accountLevel4Schema = mongoose.Schema({
        code:{type:String, required:true},
        level3Code:{type:String, required:true},
        discription: {type:String, required:true},
        debit:{type:String, required:true},
        credit:{type:String, required:true}
})

module.exports = mongoose.model("AccountLevel4", accountLevel4Schema )