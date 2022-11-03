const sequelize  = require("sequelize");
const clienteModel = require("../../../models/clientes")

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

const criarclienteNoBD = async(_cliente) =>{

    await clienteModel.create(_cliente).catch((err)=>{
        console.log(err)
       })
}

module.exports = {
    validarMatricula,
    criarclienteNoBD
};
