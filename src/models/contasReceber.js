const Sequelize = require('sequelize')
const cliente = require('./clientes')

const contasReceber = sequelizeAcademia.define('contasRecebers' , {

    cpf:{
        type: Sequelize.STRING,
        allowNull: true
    },
    nomePlano:{
        type: Sequelize.STRING,
        allowNull: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    recibo:{
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    statusPago:{
        type: Sequelize.STRING,
        allowNull: true
    },
    dataVencimento:{
        type: Sequelize.DATE,
        allowNull: true
    },
    dataPagamento:{
        type: Sequelize.DATE,
        allowNull: false
    },
   /*  createdAt:{
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }, */
    timestamps: false   
})

contasReceber.belongsTo(cliente, {
    constraint: true,
    foreignKey: 'fk_ContasReceber_clientes'
})

module.exports = contasReceber