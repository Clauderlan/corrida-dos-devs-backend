const express = require('express')
const app = express()
const port = 3006

const registerRouter = require("./controllers/authController")

app.get('/', (req, res) => {
    res.send("Hello user") // Landing Page
})

// Routers
    app.use("/auth", registerRouter) // Criando a rota com prefixo auth
    
app.listen(port, () => console.log(`localhost ${port}!`))