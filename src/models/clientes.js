const Sequelize = require('sequelize')

//const "Nome-Tabela" = Conexão-Global.define('Nome-Tabela',{
const clientes = sequelizeAcademia.define('clientes', {

        /*Nome_coluna:{
            type: Sequelize.Datatybe,
            allwNull: notnull = true / null = false,

        },*/
        nome:{
            type: Sequelize.STRING,
            allowNull: true,
            primaryKey: true
        },
        cpf:{
            type: Sequelize.STRING,
            allowNull: true,
            primaryKey: true
        },
        nascimento:{
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        sexo:{
            type: Sequelize.STRING,
            allowNull: true
        },
        telefone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        cep: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        endereco: {
            type: Sequelize.STRING,
            allowNull: true
        },
        numero: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        bairro: {
            type: Sequelize.STRING,
            allowNull: true
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,

        },
        createdAt: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: true
        },
        tipoPlano:{
            type: Sequelize.STRING,
            allowNull: true
        },
        vigencia:{
            type: Sequelize.STRING,
            allowNull: true
        },



    })

    module.exports = clientes
