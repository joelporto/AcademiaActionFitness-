const Sequelize = require('sequelize')
const cliente = require('./clientes')

const contasReceber = sequelizeAcademia.define('contasRecebers' , {

    cpfConta:{
        type: Sequelize.STRING,
        allowNull: true
    },
    nomePlano:{
        type: Sequelize.STRING,
        allowNull: true
    },
    nomeConta:{
        type: Sequelize.STRING,
        allowNull: true
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull:true
    },
    vigencia:{
        type: Sequelize.STRING
    },
    statusPago1:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago2:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago3:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago4:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago5:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago6:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago7:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago8:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago9:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago10:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago11:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPago12:{
        type: Sequelize.STRING,
        allowNull: true
    },
    dataP1:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataP2:{
        type: Sequelize.DATE,
        
    },
    dataP3:{
        type: Sequelize.DATE,
        
    },
    dataP4:{
        type: Sequelize.DATE,
        
    },
    dataP5:{
        type: Sequelize.DATE,
        
    },
    dataP6:{
        type: Sequelize.DATE,
        
    },
    dataP7:{
        type: Sequelize.DATE,
        
    },
    dataP8:{
        type: Sequelize.DATE,
        
    },
    dataP9:{
        type: Sequelize.DATE,
        
    },
    dataP10:{
        type: Sequelize.DATE,
        
    },
    dataP11:{
        type: Sequelize.DATE,
        
    },
    dataP12:{
        type: Sequelize.DATE,
        
    },
    dataV1:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV2:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV3:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV4:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV5:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV6:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV7:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV8:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV9:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV10:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV11:{
        type: Sequelize.DATE,
        allowNull:true
    },
    dataV12:{
        type: Sequelize.DATE,
        allowNull:true
    },
    recibo:{
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
  
})

/*  contasReceber.belongsTo(cliente, {
    constraint: true
    foreignKey: 'cpf',
    sourcekey: 'cpfContas'
})  */

module.exports = contasReceber