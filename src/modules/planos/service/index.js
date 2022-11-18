const { async } = require("q")
const dadosModel = require("../../../models/planos")

const criarDadonoBD = async(_dados) =>{

    await dadosModel.create(_dados)
}

module.exports = {
    criarDadonoBD
}