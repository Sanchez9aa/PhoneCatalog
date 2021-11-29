const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const MongoDb = process.env.MONGO_DB

const DbConnect = () => {
    mongoose.connect(MongoDb)
    .then(() => console.log("Conection to DB stablised"))
    .catch((err) => console.log(err))
}

module.exports = DbConnect 