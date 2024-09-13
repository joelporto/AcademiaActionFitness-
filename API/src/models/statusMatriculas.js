const Sequelize = require('sequelize')

const statusMatriculas = sequelizeAcademia.define('statusMatriculas',{

    cpf:{
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    motivoCancelar:{
        type: Sequelize.STRING,
        allowNull: true
    },
    planoCancelado:{
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
})

module.exports = statusMatriculas