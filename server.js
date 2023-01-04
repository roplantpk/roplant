const express=require("express")
const app = express()
const connectDB = require("./config/db")
const errorHandler = require("./middleware/errorHanlder")
const dotenv=require("dotenv").config()
const port=process.env.PORT


connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api/user",require("./Routes/userRoutes"))
app.use("/api/chequeBook", require("./Routes/chequeBookRoute"))
app.use("/api/partyCategory", require("./Routes/partyCategoryRoute"))
app.use("/api/accountLevel4", require("./Routes/accountLevel4Route"))
app.use("/api/taxes",require("./Routes/taxesRoute"))
app.use("/api/accountLevel3",require("./Routes/accountLevel3Route"))
app.use("/api/expenseHeade",require("./Routes/expenseHeadRoutes"))
app.use("/api/expenseControl",require("./Routes/expenseControlRoutes"))

app.use("/api/journalVoucher", require("./Routes/journalVoucherRoute"))
app.use("/api/creditVoucher", require("./Routes/creditVoucherRoute"))
app.use("/api/debitVoucher", require("./Routes/debitVoucherRoute"))

app.use("/api/bankAccount",require("./Routes/bankAccountRoute"))
app.use("/api/iemInformation",require("./Routes/itemInformationRoutes"))
app.use("/api/partiesInformation",require("./Routes/partiesInformationRoutes"))
app.use("/api/employee",require("./Routes/emploeeRoutes"))
app.use("/api/purchaseInvoiceNo", require("./Routes/purchaseInvoiceRoute"))
app.use("/api/purchaseDelivery", require("./Routes/purchaseDeliveryRoute"))
app.use("/api/purchaseDeliveryOrder", require("./Routes/purchaseDeliveryOrderRoute"))
app.use("/api/workOrder", require("./Routes/workOrderRoute"))
// app.use("/api/purchaseDeliveryOrder", require("./Routes/purchaseDeliveryOrderRoute"))

app.listen(port,()=>{
    console.log(`Server is Running ${port}`)
})
app.use(errorHandler)