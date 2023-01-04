const express = require("express")
const router = express.Router()
const {addDepartment} = require("../Controller/departmentController")

router.post("/postDept", addDepartment)

module.exports = router