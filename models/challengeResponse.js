const mongoose = require("mongoose")

const ChallengeResponseSchema = mongoose.Schema({
    idUser : {
        type : String,
        require : true
    },
    link : {
        type : String,
        require : true
    }
})

const ChallengeResponse = mongoose.model("ChallengeResponse", ChallengeResponseSchema) // Salvando o Model no database.

module.exports = ChallengeResponse