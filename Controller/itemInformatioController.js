const itemInformation = require("../models/itemInformationModals")
const acynsHandler = require("express-async-handler")
const postItemInformation = acynsHandler(async (req, res) => {
    const itemInformations = await itemInformation.create(req.body)
    res.status(200).json({
        itemInformations,
        message: ("post Data")

    })
})
module.exports = { postItemInformation }