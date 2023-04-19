const db = require('../db/db');

const cadastro = db.sequelize.define('cadastros', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

//cadastro.sync({ force: true })

module.exports = cadastro;