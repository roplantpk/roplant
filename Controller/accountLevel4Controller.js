const AccountLevel4 = require("../models/accountLevel4Model")
const asyncHandler = require("express-async-handler")

const addAccountLevel4 = asyncHandler(async(req,res)=>{

    const accountLevel4 = await AccountLevel4.create(req.body)

    res.status(200).json({
        accountLevel4,
        message:  "posted"
    })
})

module.exports = {addAccountLevel4}