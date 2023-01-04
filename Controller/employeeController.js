// const {employee} = require("../models/employeeModals")

const asyncHandler=require("express-async-handler")
const postEmployee=asyncHandler(async(req,res)=>{
    // const employees=await employee.create(req.body)
    res.status(200).json({
        message:"Post Datad"
        // employees
    })
})
module.exports={postEmployee}