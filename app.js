const express = require('express')
const bodyParser = require("body-parser")
const registerRouter = require("./controllers/authController")
const app = express()
const port = 3006
// Config
    // Body-Parser
    app.use(express.json())
    app.use(express.urlencoded({extended : false}))

// Routes
    app.use("/auth", registerRouter) // Criando a rota com prefixo auth
app.listen(port, () => console.log(`Example app listening on port ${port}!`))