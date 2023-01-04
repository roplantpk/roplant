const partiesInformation=require("../models/partiesInformationModals")
const acynsHandler=require("express-async-handler")
const postpartiesInformation=acynsHandler(async(req,res)=>{
    // const partiesInformation = await accountLevel3.create(req.body)
           res.status(200).json({
            // partiesInformation,
            message:"post Data"
           })
})
module.exports={postpartiesInformation}