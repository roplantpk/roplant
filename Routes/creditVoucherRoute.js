const express = require("express")
const router = express.Router()
const {addCreditVoucher} = require("../Controller/creditVoucherController")


router.post("/post/CreditVoucher", addCreditVoucher)
module.exports = router