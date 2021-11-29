const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const DbConnect = require("./connectDb")
const phoneRouter = require("./routes/phone")

dotenv.config()
const app = express()

const PORT = process.env.PORT

//Connect to DB
DbConnect()

//Middlewares

app.use(express.json())
app.use(cors())
app.use("/phones", phoneRouter)

app.listen(PORT || 8801, () => {
    console.log(`Port listening on ${PORT}`)
})