const PurchaseDeliveryOrders = require("../models/purchaseDeliveryOrderModel")
const asyncHandler = require("express-async-handler")

const addPurchaseDeliveryOrder = asyncHandler(async(req, res)=>{

    const purchaseDeliveryOrder = await PurchaseDeliveryOrders.create(req.body)

    res.status(200).json(purchaseDeliveryOrder)

})

module.exports = {addPurchaseDeliveryOrder}