const { async } = require("q")
const sequelize = require("sequelize")
const fornecedorModel = require("../../../models/fornecedor")

const validarFornecedor = async(req,res) =>{
    let result = await fornecedorModel.findOne({
        where:{
            cpfCnpj: req.body.cnpj
        }
            }).catch((err)=>{
                console.log(err)
        })
    return result
}

const criarFornecedornoBD = async(_fornecedor) =>{
    await fornecedorModel.create(_fornecedor).catch((err)=>{
        console.log(err)
    })
}

module.exports = {
    validarFornecedor,
    criarFornecedornoBD
}