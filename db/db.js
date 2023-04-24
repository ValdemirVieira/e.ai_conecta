const Sequelize = require('sequelize');
const sequelize = new Sequelize('softex', 'root', 'P3ndr@g0n', { dialect: 'mysql', host: 'localhost' });

sequelize.authenticate().then(function () {
    console.log("conexão realiazda com sucesso")
}).catch(function (error) {
    console.log("não está pegando " + error)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}