const express = require("express")
const routes = express.Router()

const JogoController = require('./controllers/JogoController')
const UsuarioController = require('./controllers/UsuarioController')
const login = require("./middleware/login")


routes.get("/jogos", JogoController.index)
      .post("/jogos", login, JogoController.store)


routes.get("/usuarios", login, UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login)

module.exports = routes
