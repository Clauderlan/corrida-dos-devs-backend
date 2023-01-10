const mongoose = require("../database/index")
const ChallengeSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    bio : {
        type : String,
        require : true
    },
    reference : {
        type : String,
        require : true
    }
}) // Criando o Schema (Esqueleto de Colunas) do model, definindo seu tipo, requerimento...

const Challenge = mongoose.model("Challenge", ChallengeSchema) // Salvando o Model no database.

module.exports = Challenge // Exportando o Model