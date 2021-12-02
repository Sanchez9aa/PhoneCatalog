const mongoose = require("mongoose")

const DbConnect = (MongoDb) => {
    mongoose.connect(MongoDb)
    .then(() => console.log("Conection to DB stablised"))
    .catch((err) => console.log(err))
}

module.exports = DbConnect 