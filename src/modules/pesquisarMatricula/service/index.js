const sequelize  = require("sequelize");
const pesquisarModel = require("../../../models/clientes")

const validarCPFnoBD = async(req,res) =>{

    let result = await pesquisarModel.findOne({
       where:{
           Cpf: req.body.cpf
       }
           }).catch((err)=>{
                console.log(err)
       })
   return result
}



module.exports = {
    validarCPFnoBD
}
