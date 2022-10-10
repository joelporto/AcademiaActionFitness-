const sequelize  = require("sequelize");
const funcionarioModel = require("../../../models/funcionario")


const validaUsuarioNoBD = async(req,res) =>{
        
     let result = await funcionarioModel.findOne({
        where:{
            Nickname: req.body.usuario,
        }
            }).catch((err)=>{
                console.log(err)
        })
    return result
}

const criaUsuarioNoBD = async(_usuario) =>{
      
    await funcionarioModel.create(_usuario).catch((err)=>{
       
       })

}


module.exports = { 
    validaUsuarioNoBD,    
    criaUsuarioNoBD
};