const Sequelize = require('sequelize')

//const "Nome-Tabela" = Conexão-Global.define('Nome-Tabela',{
const clientes = sequelizeAcademia.define('clientes', {
        
        /*Nome_coluna:{
            type: Sequelize.Datatybe,
            allwNull: notnull = true / null = false,
            
        },*/
        Nome:{
            type: Sequelize.STRING,
            allowNull: true,
            primaryKey: true
        },
        Cpf:{
            type: Sequelize.STRING,
            allowNull: true
        },
        Nascimento:{
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        Sexo:{
            type: Sequelize.STRING,
            allowNull: true
        },
        Telefone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        CEP: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        Endereco: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Numero: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        Bairro: {
            type: Sequelize.STRING,
            allowNull: true
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
/*         Email:{
            type: Sequelize.STRING,
            allowNull: true
        }   */ 
        
        
    })
    
    module.exports = clientes
    

            