const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const DbConnect = require("./connectDb")
const phoneRouter = require("./routes/phone")

dotenv.config()
const app = express()

const PORT = process.env.PORT
const MongoDb = process.env.MONGO_DB
const Prod = process.env.NODE_ENV

//Connect to DB
DbConnect(MongoDb)

//Middlewares

app.use(express.json())
app.use(cors())
app.use("/phones", phoneRouter)

//Check if we got the produc build for heroku

if (Prod === "production") {
    app.use(express.static("client/build"))
}

app.listen(PORT || 8801, () => {
    console.log(`Port listening on ${PORT}`)
})