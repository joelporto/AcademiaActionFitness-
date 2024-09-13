const { async } = require("q")
const dadosModel = require("../../../models/planos")


const exibirPlanos = async(req,res) =>{

    let result = await dadosModel.findAll()

    return result
    
}

const criar = async(_plano)=>{

    await dadosModel.create(_plano)
}

module.exports = {
    exibirPlanos,
    criar
}