const mongoose = require("mongoose")

const {Schema, model} = mongoose

const PhoneSchema = new Schema({
        "name": { type: String, require: true, min: 3, max: 20},
        "manufacturer": {type: String, require: true, min: 3, max: 20},
        "description": {type: String, require: true, min: 3, max: 300},
        "color": {type: String, require: true, min: 3, max: 20},
        "price": {type: Number, require: true, min: 2, max: 4},
        "imageFileName": {type: String, require: true, min: 3, max: 20},
        "screen": {type: String, require: true, min: 3, max: 60},
        "processor": {type: String, require: true, min: 3, max: 60},
        "ram": {type: Number, require: true, min: 1, max: 3},
})

module.exports = model("Phone", PhoneSchema)