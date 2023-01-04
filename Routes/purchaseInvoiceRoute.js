const express = require("express")
const router = express.Router()
const {addPurchaseInvoice} = require("../Controller/purchaseInvoiceController")

router.post("/post/purchaseInvoiceNo", addPurchaseInvoice)

module.exports = router