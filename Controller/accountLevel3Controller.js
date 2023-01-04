const accountLevel3=require("../models/accountLevel3Modals")
const acynsHandler=require("express-async-handler")
const postAccountLevel3=acynsHandler(async(req,res)=>{
    const acconutLevel = await accountLevel3.create(req.body)
           res.status(200).json({
            acconutLevel,
            message:("post Data")

           })
})
module.exports={postAccountLevel3}