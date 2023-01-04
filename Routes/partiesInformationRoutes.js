const  {postpartiesInformation}=require("../Controller/partiesInformationController")
const router=require("express").Router()
router.post("/post/partiesInformation",postpartiesInformation)
module.exports=router