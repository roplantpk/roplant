const {postEmployee} = require("../Controller/employeeController")
const express=require("express")
const router=express.Router()
router.post("/post/employee",postEmployee)
module.exports=router