const db = require('../db/db');

const complemento = db.sequelize.define('info_complementares', {
    idCliente: {
        type: db.Sequelize.INTEGER,
        foreignKey: "true",
        allowNull: "false"
    },
    cpf: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    formas_pagamento: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    cep: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    lougradouro: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    numero: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    bairro: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    ponto_de_ref: {
        type: db.Sequelize.STRING
    }
})

//agendado.sync({ force: true })

module.exports = agendado;