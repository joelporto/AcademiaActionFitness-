const Sequelize = require('sequelize')

const planos = sequelizeAcademia.define('planos' ,{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomePlano:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: true
    },
    desc1:{
        type: Sequelize.STRING
    },
    desc2:{
        type: Sequelize.STRING
    },
    desc3:{
        type: Sequelize.STRING
    },
    desc4:{
        type: Sequelize.STRING
    },
    desc5:{
        type: Sequelize.STRING
    },
    desc6:{
        type: Sequelize.STRING
    },
    desc7:{
        type: Sequelize.STRING
    },
    desc8:{
        type: Sequelize.STRING
    }
})

module.exports = planos