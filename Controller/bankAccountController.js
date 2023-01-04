const bankAccount = require("../models/bankAcoountModals")
const asyncHandler = require("express-async-handler")

const postBankAccount = asyncHandler(async(req, res)=>{

    const bankAccounts = await bankAccount.create(req.body)

    res.status(200).json(bankAccounts)

})

const getBankAccounts = asyncHandler(async(req, res)=>{

    const bankAccounts = await bankAccount.find()

    res.status(200).json(bankAccounts)

})

module.exports = {postBankAccount, getBankAccounts}