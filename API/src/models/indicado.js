const Sequelize = require('sequelize')

const indicados = sequelizeAcademia.define('indicados',{

    cpf:{
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true
    },
    cpfInd:{
        type: Sequelize.STRING,
        allowNull: true
    },
    nomeInd:{
        type: Sequelize.STRING,
        allowNull: true
    },
    telInd:{
        type: Sequelize.STRING,
        allowNull: true
    },
    dataLiberacao:{
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = indicados