const mongoose = require("mongoose")

const connectDB =  async ()=>{
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/roplantpk")
        console.log(`Mongo DB has been connected with ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB
