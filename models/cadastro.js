const db = require('../db/db');

const cadastro = db.sequelize.define('cadastro', {
    idCliente: {
        type: db.Sequelize.INTEGER,
        primaryKey: "true",
        allowNull: "false",
        autoIncrement: "true"
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    telefone: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    senha_cliente: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    }
})

cadastro.sync({ force: true })

module.exports = cadastro;