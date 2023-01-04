const DebitVouchers = require("../models/debitVoucherModel")
const asyncHandler = require("express-async-handler")

const addDebitVoucher = asyncHandler(async(req,res)=>{
    
    const debitVoucher = await DebitVouchers.create(req.body)

    res.status(200).json(debitVoucher)
})

module.exports = {addDebitVoucher}