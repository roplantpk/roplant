const  {postItemInformation}=require("../Controller/itemInformatioController")
const router=require("express").Router()
router.post("/post/iteminformation",postItemInformation)
module.exports=router