const Deparments = require("../models/departmentModel")
const asyncHandler = require("express-async-handler")

const addDepartment = asyncHandler(async(req, res)=>{

    const department = await Deparments.create(req.body)

    res.status(200).json(department)

})

module.exports = {addDepartment}