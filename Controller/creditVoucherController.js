const CreditVouchers = require("../models/creditVoucherModel")
const asyncHandler = require("express-async-handler")

const addCreditVoucher = asyncHandler(async(req, res)=>{

    const creditVoucher = await CreditVouchers.create(req.body)

    res.status(200).json(creditVoucher)
})

module.exports = {addCreditVoucher}