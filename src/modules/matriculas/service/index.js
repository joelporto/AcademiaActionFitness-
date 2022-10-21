const sequelize  = require("sequelize");
const matriculasModel = require("../../../models/clientes")


/*const validarMatricula = async(req,res) =>{
    let result = await matriculasModel.findOne({
        where:{
            cpf: req.body.cpf,
        }
            }).catch((err)=>{
                console.log(err)
        })
    return result
}

const criarMatriculaNoBD = async(_matricula) =>{

    await matriculasModel.create(_matricula).catch((err)=>{
        console.log(err)
       })
}




module.exports = {
    validarMatricula,
    criarMatriculaNoBD
};*/

const criarMatriculaNoBD = async(_matricula) =>{
  await matriculasModel.create(_matricula)
}

module.exports = {
  criarMatriculaNoBD
}
