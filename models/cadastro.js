const db = require('../db/db');

const cadastro = db.sequelize.define('cadastro', {
    idCliente: {
        type: db.Sequelize.INTEGER
    },
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    senha_cliente: {
        type: db.Sequelize.STRING
    }
})

cadastro.sync({ force: true })

module.exports = cadastro;