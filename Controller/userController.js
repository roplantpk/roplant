const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const addNewUser = asyncHandler(async(req,res)=>{
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


const loginUser = asyncHandler(async(req,res)=>{

    const {userEmail, userPassword } = req.body
    
    const user = await User.findOne({userEmail})

    if(user && await bcrypt.compare(userPassword, user.userPassword)){
        res.status(200).json({
            success: true,
            name: user.name,
            email: user.email,
            token: gettoken(user._id)
        })    
    }else{
        throw new Error("Invailid Credentials!...")
    }

})

const getAllUsers = asyncHandler( async(req,res)=>{
    const users = await User.find()
    res.status(200).json({
        message:"Get Data",
        users
    })
})

const gettoken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET, {expiresIn:"30d"})
}

module.exports={ loginUser, getAllUsers, addNewUser}