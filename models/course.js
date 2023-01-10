const mongoose = require("../database/index")
const CourseSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true,
        uppercase : true
    }, bioTitle : { 
        type : String,
        require : true,
    }, bioRequirements : {
        type : String,
    }, content : {
        type : String,   
        require : true
    }, createdAt : {
        type : Date,
        default : Date.now
    }
    
}) // Criando o Schema (Esqueleto de Colunas) do model, definindo seu tipo, requerimento...

const Course = mongoose.model("Course", CourseSchema) // Salvando o Model no database.

module.exports = Course // Exportando o Model