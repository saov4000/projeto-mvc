const {DataTypes} = require('sequelize')
const sequelize = require('./db')

const Livro = sequelize.define('Livro',
    {
        titulo: {type:DataTypes.STRING, allowNull:false},
        autor: {type:DataTypes.STRING, allowNull:false},
        genero: {type:DataTypes.STRING},
        ano: {type:DataTypes.INTEGER},
    },{
        tableName:'livros'
    }
)

module.exports = Livro