const mongoose = require("../database/index")
const bcrypt = require("bcryptjs")
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        lowercase : true,
        unique : true
    }, 
    bio : {
        type : String
    }, 
    socialMedia : {
        type : String
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    rankScore : {
        type : Number,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
}) // Criando o Schema (Esqueleto de Colunas) do model, definindo seu tipo, requerimento...
UserSchema.pre("save", async function(next) {
    const hash = await bcrypt.hash(this.password, 10) // Cryptografando a senha, gerando um HASH.
    this.password = hash
    next()
})
const User = mongoose.model("User", UserSchema) // Salvando o Model no database.

module.exports = User // Exportando o Model