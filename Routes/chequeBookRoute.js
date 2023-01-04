const router = require("express").Router()
const { postChequekBook, deleteAll } = require("../Controller/chequeBookController")
router.post("/post/chequeBook", postChequekBook)
// router.delete("/post/chequeBook", deleteAll)

module.exports = router