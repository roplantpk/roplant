const express = require("express")
const router = express.Router()

const {addWorkOrder} = require("../Controller/workOrderController")

router.post("/post/workOrder", addWorkOrder)

module.exports = router