const express = require("express")
const router = express.Router()

const {addDebitVoucher} = require("../Controller/debitVoucherController")

router.post("/post/debitVoucher", addDebitVoucher)

module.exports = router