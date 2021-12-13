const express = require("express")

const { register,login} = require("./controllers/auth.controller")

const movieController = require("./controllers/movie.controller")

const app = express()

app.use(express.json())

app.post("/register",register)

app.post("/login",login)

app.use("/movies",movieController)
module.exports =app