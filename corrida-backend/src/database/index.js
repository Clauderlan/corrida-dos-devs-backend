const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/corrida")
mongoose.Promise = global.Promise

module.exports = mongoose