const express = require("express")
const { addUser } = require("../controllers/userController")
const router = express.Router()

router.post("/adduser/",addUser)

module.exports = router