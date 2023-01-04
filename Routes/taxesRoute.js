const express = require("express")
const router = express.Router()

const {addTaxes} = require("../Controller/taxesController")

router.post("/post/taxes", addTaxes)

module.exports = router