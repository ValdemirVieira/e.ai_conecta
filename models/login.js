const db = require('../db/db');
const bcrypt = require('bcrypt');

const login = db.sequelize.define('login', {
    
    email: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    senha_cliente: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [6, 100],
            isStrongPassword: function (value) {
              const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{6,}$/;
              if (!strongPasswordRegex.test(value)) {
                throw new Error('A senha deve ter 6 letras ou mais, conter letras maiúsculas e minúsculas, conter um caractere especial e ter pelo menos um número.');
              }
            }
    }
    }
})

cadastro.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.senha_cliente, 10);
    user.senha_cliente = hashedPassword;
})

//cadastro.sync({ force: true })

module.exports = login;