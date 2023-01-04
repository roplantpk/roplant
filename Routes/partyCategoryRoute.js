const express = require("express")
const router = express.Router()

const {addPartyCategory} = require("../Controller/partyCategoryController")

router.post("/post/PartyCategory", addPartyCategory)

module.exports = router