const express = require("express")
const router = express.Router()
const {addPurchaseDeliveryOrder} = require("../Controller/purchaseDeliveryOrderController")

router.post("/post/purchaseDeliveryOrder", addPurchaseDeliveryOrder)

module.exports = router

