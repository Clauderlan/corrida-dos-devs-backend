const mongoose = require("../database/index")

const StudentSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String, // Crypt
        require : true,
        select : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})
const Student = mongoose.model("Student", StudentSchema) // Salvando a senha no database.

module.exports = Student // Export Model