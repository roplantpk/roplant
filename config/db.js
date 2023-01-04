const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")


const connectDB = asyncHandler(async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB is connect with ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = connectDB