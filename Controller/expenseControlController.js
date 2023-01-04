const  expenseControlSchema  = require("../models/expenseControlModals")
const asyncHandler = require("express-async-handler")
const addExpenseControl = asyncHandler(async(req, res) => {
    const expenseControl = await expenseControlSchema.create(req.body)
    res.status(200).json({
        message: "post data",
        expenseControl
    })
})
module.exports = { addExpenseControl }