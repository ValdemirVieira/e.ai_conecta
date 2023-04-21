const db = require('../db/db');

const agendado = db.sequelize.define('agendamento', {
    cod_agendamento: {
        type: db.Sequelize.INTEGER,
        primaryKey: "true",
        allowNull: "false"
    },
    local_servico: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    data_servico: {
        type: db.Sequelize.DATE,
        allowNull: "false"
    },
    hora_servico: {
        type: db.Sequelize.TIME,
        allowNull: "false"
    },
    medidas_local: {
        type: db.Sequelize.STRING,
        allowNull: "false"
    },
    valor_desinfecção: {
        type: db.Sequelize.DECIMAL,
        allowNull: "false"
    },
    infor_adicionais: {
        type: db.Sequelize.STRING
    }
})

//agendado.sync({ force: true })

module.exports = agendado;