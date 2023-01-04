const ChequeBook = require("../models/chequeBookModel")
const acynsHandler = require("express-async-handler")

const postChequekBook = acynsHandler(async(req,res)=>{

    const {AccTitile, ChequeNoFrom, ChequeNoTo} = req.body


    for (let index = ChequeNoFrom; index <= ChequeNoTo; index++) {

        const postCheckBook = await ChequeBook.create({accountTitle:AccTitile, chequeNo:index})
        
    }



    res.status(200).json({
         message:"Cheque Book Added",
        //  postCheckBook
    })
})

const deleteAll = acynsHandler(async(req,res)=>{

    ChequeBook.remove()

    res.status(200).json({
        message:"Deleted"
    })
})


module.exports = {postChequekBook, deleteAll}