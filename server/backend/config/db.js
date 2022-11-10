const mongoose = require("mongoose")

const connectDB =  async ()=>{
    try {
        //mongodb://shakeel:ShakeelROPlant@3.81.23.135:27017/roplantpk
        const conn = await mongoose.connect("mongodb://arif:arif@3.81.23.135:27017/roplantpk")
        // const conn = await mongoose.connect("mongodb://localhost:27017/roplantpk")
        console.log(`Mongo DB has been connected with ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB
