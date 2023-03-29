const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports = new Schema({
    description: String,
    originalTitle: String,
    clasification: String,
    duration: String
})
