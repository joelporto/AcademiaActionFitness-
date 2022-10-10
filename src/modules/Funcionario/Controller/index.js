const  Sequelize  = require("sequelize");
const service = require("../service/index");
const bcrypt = require("bcrypt")


const createFuncionario = async(req,res) =>{
    var error = []
    
    if(!req.body.usuario || typeof req.body.usuario == undefined || req.body.usuario == null){
        error.push({texto: "NickName invalido"})
    }

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        error.push({texto: "Nome invalido"})
    }


    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
        error.push({texto: "Senha invalido"})
    }

    if(req.body.senha.length < 4){
        error.push({texto: "Senha muito curta"})
    }

    if(error.length > 0){
        res.status(400).send({mensagen: error});
        return req
    }
    
    let validaUsuario =  await service.validaUsuarioNoBD(req) 

    if(validaUsuario){
        res.status(400).send({mensagen: "Erro: Nickname ja existe"});
        return
    }else{
        res.status(200).send({mensagen: "usuario cadastrado com sucesso" })
    }

    
    const myPlaintextPassword = req.body.senha
    const hash = bcrypt.hashSync(myPlaintextPassword, 5);
   
    const _usuario = {
        Nome_Funcionario: req.body.nome,
        Nickname: req.body.usuario,
        Senha: hash
    }
    
    await service.criaUsuarioNoBD(_usuario) 



}

module.exports = { 
    createFuncionario,
   
};