
const express =  require("express")
const router = express.Router()
const {addAccountLevel4} = require("../Controller/accountLevel4Controller")

router.post("/post/AccountLevel4", addAccountLevel4)

module.exports = router