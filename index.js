//imports
const sequelize = require("./db") 
const express = require("express")

const app = express() // criando um objeto do express

sequelize.sync().then(()=>{ //testando o conexão
    app.listen(3000, ()=>console.log("Banco Conetado!"))
})