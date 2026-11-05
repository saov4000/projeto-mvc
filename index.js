//imports
const sequelize = require("./db") 
const express = require("express")
const exphbs = require('/express-handlebars')

require('./Livro') //registrar a model

const app = express() // criando um objeto do express

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) =>res.redirect('/livros'))
app.use('/livros', require('./Routes'))

sequelize.sync().then(()=>{ //testando o conexão
    app.listen(3000, ()=>console.log("Banco Conetado! Em http://localhost:3000"))
})