const db = require('../db/db');
const bcrypt = require('bcrypt');

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
        allowNull: false,
        validate: {
        len: [6, 100]
    }
    }
})

cadastro.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.senha_cliente, 10);
    user.senha_cliente = hashedPassword;
})

cadastro.sync({ force: true })

module.exports = cadastro;