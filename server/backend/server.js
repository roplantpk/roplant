const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const app = express()
const errorHandler = require("./middleware/errorHandler")
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/auth/", require("./routes/userRoute"))

app.listen(process.env.PORT, ()=>{console.log(`Server Is Running on PORT ${process.env.PORT}`)})

app.use(errorHandler)
