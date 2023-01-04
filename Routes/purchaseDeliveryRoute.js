const express = require("express")
const router = express.Router()
const {addPurchaseDelivery} = require("../Controller/purchaseDeliveryController")

router.post("/post/purchaseDelivery", addPurchaseDelivery)

module.exports = router