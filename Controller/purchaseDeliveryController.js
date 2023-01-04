const PurchaseDeliverys = require("../models/purchaseDeliveryModel")
const asyncHandler = require("express-async-handler")

const addPurchaseDelivery = asyncHandler(async(req, res)=>{

    const purchaseDelivery = await PurchaseDeliverys.create(req.body)

    res.status(200).json(purchaseDelivery)

})

module.exports = {addPurchaseDelivery}