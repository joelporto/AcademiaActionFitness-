const Sequelize = require("sequelize")

const funcionarios = sequelizeAcademia.define('funcionarios', {
    Nickname: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: true
    },
    Senha: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

module.exports = funcionarios