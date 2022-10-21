const  Sequelize  = require("sequelize");
const service = require("../service/index");


const createMatricula = async(req,res) =>{
    /*var error = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
      error.push({texto: "Nome invalido"})
    }
    if(!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null){
      error.push({texto: "CPF invalido"})
    }
    if(!req.body.nasc || typeof req.body.nasc == undefined || req.body.nasc == null){
      error.push({texto: "Data de Nacimento invalido"})
    }
    if(!req.body.telefone || typeof req.body.telefone == undefined || req.body.telefone == null){
      error.push({texto: "Nome invalido"})
    }
    if(!req.body.cep || typeof req.body.cep == undefined || req.body.cep == null){
      error.push({texto: "Nome invalido"})
    }
    if(!req.body.endereco || typeof req.body.endereco == undefined || req.body.endereco == null){
      error.push({texto: "Nome invalido"})
    }
    if(!req.body.numero || typeof req.body.numero == undefined || req.body.numero == null){
      error.push({texto: "Nome invalido"})
    }
    if(!req.body.bairro || typeof req.body.bairro == undefined || req.body.bairro == null){
      error.push({texto: "Nome invalido"})
    }

  if(error.length > 0){
    res.status(400).send({mensagen: error});
    return req
}

let validarMatricula =  await service.validarMatricula(req)

if(validarMatricula){
    res.status(200).send({mensagen: "Matricula cadastrado com Suceso"})
}else{
    res.status(400).send({mensagen: "Erro: matricula já existe"});
    return req
}*/


    let matricula = {

      //Nome_coluna: req.body.id_HTML
        nome: req.body.nome,
        cpf: req.body.cpf,
        nascimento: req.body.nasc,
        sexo: req.body.genero,
        telefone: req.body.telefone,
        cep: req.body.cep,
        endereco: req.body.endereco,
        numero: req.body.numero,
        bairro: req.body.bairro,
        email: req.body.email,
        tipoPlano: req.body.plan,
        vigencia: req.body.vigencia,

    }


     await service.criarMatriculaNoBD(matricula)

}


module.exports = {
    createMatricula

};
