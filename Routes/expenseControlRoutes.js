const express=require("express")
const router=express.Router()
const {addExpenseControl} = require("../Controller/expenseControlController")
router.post("/post/expensecontrol",addExpenseControl)
module.exports=router