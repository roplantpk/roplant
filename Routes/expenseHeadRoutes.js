const express=require("express")
const router=express.Router()
const {addexpenseHead}=require("../Controller/expenseHeadController")
router.post("/post/ExpenseHead",addexpenseHead)
module.exports=router
