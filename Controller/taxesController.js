const Taxes = require("../models/taxesModel")
const asyncHandler = require("express-async-handler")

const addTaxes = asyncHandler(async(req,res)=>{
    const tax = await Taxes.create(req.body)
    
    res.status(200).json(tax)
})

module.exports = {addTaxes}