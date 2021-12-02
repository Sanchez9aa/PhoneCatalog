const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const path = require('path')

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

//Server static fields if in production
if (Prod === "production") {
    //Create static folder
    app.use(express.static(path.join(__dirname, '/client/build')))
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}else{
    app.get("/", (req,res) => {
        res.send("Api running")
    })
}

app.listen(PORT || 8801, () => {
    console.log(`Port listening on ${PORT}`)
})