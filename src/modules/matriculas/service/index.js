const { async } = require("q");
const sequelize  = require("sequelize");
const clienteModel = require("../../../models/clientes")
const contaModel = require("../../../models/contasReceber")

const validarMatricula = async(req,res) =>{
    let result = await clienteModel.findOne({
        where:{
            cpf: req.body.cpf,
        }
            }).catch((err)=>{
                console.log(err)
        })
    return result
}

const criarclienteNoBD = async(_cliente,res) =>{

    await clienteModel.create(_cliente)
    
}

const criarContasnoBD = async(_conta) =>{
    
    await contaModel.create(_conta)
}

module.exports = {
    validarMatricula,
    criarclienteNoBD,
    criarContasnoBD
};
