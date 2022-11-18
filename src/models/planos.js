const Sequelize = require('sequelize')

const planos = sequelizeAcademia.define('planos' ,{
    nomePlano:{
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: true
    }

})

module.exports = planos