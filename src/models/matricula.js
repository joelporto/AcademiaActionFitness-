const Sequelize = require('sequelize')

const matriculas = sequelizeAcademia.define('matriculas',{
    nome:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    nomePlano:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    dataMatricula:{
        type: Sequelize.DATE,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,

    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
})


module.exports = matriculas