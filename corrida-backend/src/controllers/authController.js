const {Router} = require("express")
const express = require("express")
const Student = require("../models/student")
const router = express.Router()

router.post("register", async (req, res) => {
    const { email } = req.body
    try {
        if(await Student.findOne({email}))
            return res.status(400).send({error : "user alredy exists"}) // Respondendo a requisição caso o estudante já tenha cadastro.
        const student = new Student({
            "name" : req.body.name,
            "password" : req.body.password, // crypt
            "email" : req.body.email
        })
        await student.save()
        user.password = undefined
        return res.send({student}) // Respondendo a requisição já com o estudante salvo.
    }catch(err) {
        return res.status(400).send({error : "registration failed"}) // Retornando status 400 caso ocorra algum erro.
    }
})// Rota Register.

router.post("authenticate", async (req, res) => {
    const {email, password} = req.body
    const student = await Student.findOne({email}).select("+password")
    // Crypt process.
    password = student.password ? res.send({res : "Sucessful Entry."}) : res.send({res : "Failed Entry."})
})

module.exports = router // Exportanto a rota.