const contaModel = require("../../../models/contasReceber")
const sequelize = require('sequelize')

const validarContanoBD = async(req,res) =>{

    let result = await contaModel.findOne({
        where:{
            cpfConta: req.body.cpf
        }
    }).catch((err) =>{
        console.log(err)
    })


    return result
}

module.exports = {
    validarContanoBD
}