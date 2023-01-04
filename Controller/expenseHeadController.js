const expenseHead = require("../models/expenseHeadModals")
const asyncHandler = require("express-async-handler")

const addexpenseHead = asyncHandler(async(req, res)=>{
    const postExpenseHead=await expenseHead.create(req.body)
    res.status(200).json({
        message:"post Data",
        postExpenseHead
    })

})

module.exports = {addexpenseHead}