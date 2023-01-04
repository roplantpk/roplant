const PartyCategorys = require("../models/partyCategoryModel")
const asyncHandler = require("express-async-handler")

const addPartyCategory = asyncHandler(async(req, res)=>{

    const partyCategory = await PartyCategorys.create(req.body)
   
    res.status(200).json(partyCategory)
})

module.exports = {addPartyCategory}