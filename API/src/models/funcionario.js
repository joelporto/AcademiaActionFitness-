const Sequelize = require("sequelize")


const funcionarios = sequelizeAcademia.define('funcionarios', {
    Nickname: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: true
    },
    Nome_Funcionario:{
        type: Sequelize.STRING,
        allowNull: true
    },
    Senha: {
        type: Sequelize.INTEGER,
        allowNull: true,
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

module.exports = funcionarios