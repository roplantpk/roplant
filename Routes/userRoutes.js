const express = require("express")
const router = express.Router()
const { loginUser, getAllUsers , addNewUser }=require("../Controller/userController")
router.post("/addnewuser", addNewUser)
router.post("/loginuser", loginUser)
router.get("/getallusers", getAllUsers)
module.exports = router