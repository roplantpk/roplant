const WorkOrders = require('../models/workOrderModel')
const asyncHandler = require('express-async-handler')

const addWorkOrder = asyncHandler(async(req,res) => {
    const workOrder = await WorkOrders.create(req.body)
    res.status(200).json(workOrder)
})

module.exports = {addWorkOrder}