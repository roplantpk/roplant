const  {postAccountLevel3}=require("../Controller/accountLevel3Controller")
const router=require("express").Router()
router.post("/post/accountLevel3",postAccountLevel3)
module.exports=router