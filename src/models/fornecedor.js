const Sequelize = require("sequelize")

const fornecedores = sequelizeAcademia.define('fornecedores', {
    cpfCnpj:{
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true
    },
    razaoSocial:{
        type: Sequelize.STRING,
        allowNull: true
    },
    pessoal:{
        type: Sequelize.STRING,
        allowNull: true
    },
    emailFor:{
        type: Sequelize.STRING,
        allowNull: true
    },
    tel1:{
        type: Sequelize.STRING,
        allowNull: true
    },
    tel2:{
        type: Sequelize.STRING,
        allowNull: true
    },
    cep:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    rua:{
        type: Sequelize.STRING,
        allowNull: true
    },
    pais:{
        type: Sequelize.STRING,
        allowNull: true
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull: true
    },
    uf:{
        type: Sequelize.STRING,
        allowNull: true
    },
    bairroFor:{
        type: Sequelize.STRING,
        allowNull: true
    },
    numeroFor:{
        type: Sequelize.INTEGER,
        allowNull: true
    },  

})

module.exports = fornecedores