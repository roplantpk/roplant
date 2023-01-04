const JournalVouchers = require("../models/journalVoucherModel")
const asyncHandler  = require("express-async-handler")


const addJournalVoucher = asyncHandler(async(req,res)=>{

    const journalVoucher =  await JournalVouchers.create(req.body)
    res.status(200).json(journalVoucher)
})

module.exports = {addJournalVoucher}