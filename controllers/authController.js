const { Router } = require('express')
const express = require('express')
const User = require("../models/users")
const router = express.Router()
const bcrypt = require("bcryptjs")

router.post("/register" , async (req,res) => {
    const { email } = req.body
    try {
        if(await User.findOne({email}))
            return res.status(400).send({error : "user alredy exists"}) // Respondendo com um erro caso o user já exista.

        const user = new User({
            "name" : req.body.name,
            "password" : req.body.password,
            "email" : req.body.email
        })
        await user.save()
        user.password = undefined
        return res.send({user}) // Retornando o JSON já com o model criado.
    }catch(err){
        return res.status(400).send({error : "Registration Failed"}) // Retornando status 400 caso ocorra algum erro
    }
}) // Criando a rota Register

router.post("/authenticate", async (req,res) => {
    const {email, password} = req.body 
    const user = await User.findOne({email}).select("+password")
    const pass = bcrypt.compare(password, user.password, (err, hash) => {
         hash ? res.send({res : "Successful Entry.",
        "senha" : user.password}) : res.send({res : "Failed Entry."})
    })
})



module.exports = router // Exportando o router
