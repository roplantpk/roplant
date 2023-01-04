const router = require("express").Router()
const {postBankAccount, getBankAccounts } = require("../Controller/bankAccountController")

router.post("/post/bankAccount", postBankAccount)
router.get("/get/bankAccounts" , getBankAccounts)

module.exports = router