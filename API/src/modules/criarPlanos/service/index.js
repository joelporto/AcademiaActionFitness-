const dadosModel = require("../../../models/planos")

const criar = async(_plano)=>{

    await dadosModel.create(_plano).catch((err)=>{
        console.log(err)
    })
}

module.exports = {
    criar
}