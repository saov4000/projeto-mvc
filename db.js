//arquivo de conexão com o banco
const {Sequelize} = require("sequelize") //importa o sequilize

const sequelize = new Sequelize( //faz a conexão com o banco 
    'biblioteca2', //nome do banco
    'root', //senha
    '', //senha vazia
    {host:'localhost',dialect:'mysql',logging:false})

module.exports = sequelize