const PurchaseInvoices = require("../models/purchaseInvoiceModel")
const asyncHandler = require("express-async-handler")

const addPurchaseInvoice = asyncHandler(async(req, res)=>{

    const purchaseInvoice = await PurchaseInvoices.create(req.body)

    res.status(200).json(purchaseInvoice)

})

module.exports = {addPurchaseInvoice}