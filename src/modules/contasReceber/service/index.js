const { async } = require("q")
const contaModel = require("../../../models/contasReceber")

const criarPagamentonoBD = async(_conta) =>{
    
    await contaModel.create(_conta).catch((err) =>{
        console.log(err)
    })
}

module.exports = {
    criarPagamentonoBD
}