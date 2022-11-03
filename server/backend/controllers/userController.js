const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const addUser = asyncHandler(async(req,res)=>{
    const {userName, userEmail, userPassword} = req.body

    if(!userName || !userEmail || !userPassword){
        res.status(401)
        throw new Error("Please add all fields!...")
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10)

    const user = await User.create({userName, userEmail, userPassword: hashedPassword})

    res.status(200).json({
        success: true,
        token: gettoken(user._id)
    })
})

const gettoken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET, {expiresIn:"30d"})
}

module.exports = {addUser}