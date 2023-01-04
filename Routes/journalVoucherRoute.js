const express = require("express")
const router = express.Router()
const {addJournalVoucher} = require("../Controller/journalVoucherController")

router.post("/post/journalVoucher", addJournalVoucher)

module.exports = router