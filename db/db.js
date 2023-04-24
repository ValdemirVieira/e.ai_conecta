const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, { dialect: 'mysql', host: process.env.DB_HOST });

sequelize.authenticate().then(function () {
    console.log("conexão realizada com sucesso")
}).catch(function (error) {
    console.log("não está pegando " + error)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}