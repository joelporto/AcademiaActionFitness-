const Sequelize = require("sequelize")
const service = require('../service/index')

const alterarMatricula = async(req, res) =>{
    var error = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome ==null){
      error.push({texto: "Nome invalido"})
    }

    if(!req.body.endereco || typeof req.body.endereco == undefined || req.body.endereco ==null){
      error.push({texto: "Endereço invalido"})
    }

    if(!req.body.plan || typeof req.body.plan == undefined || req.body.plan ==null){
      error.push({texto: "Plano invalido "})
    }

    if(!req.body.vigencia || typeof req.body.vigencia == undefined || req.body.vigencia ==null){
      error.push({texto: "Vigencia invalido"})
    }

    if(!req.body.nasc || typeof req.body.nasc == undefined || req.body.nasc ==null){
      error.push({texto: "Nacimento invalido"})
    }

    if(!req.body.telefone || typeof req.body.telefone == undefined || req.body.telefone ==null){
      error.push({texto: "Telefone invalido"})
    }

    if(!req.body.genero || typeof req.body.genero == undefined || req.body.genero ==null){
      error.push({texto: "Genero invalido"})
    }

    if(!req.body.cep || typeof req.body.cep == undefined || req.body.cep ==null){
      error.push({texto: "CEP invalido"})
    }

    if(!req.body.numero || typeof req.body.numero == undefined || req.body.numero ==null){
      error.push({texto: "Numero invalido"})
    }

    if(!req.body.bairro || typeof req.body.bairro == undefined || req.body.bairro ==null){
      error.push({texto: "Bairro invalido"})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email ==null){
      error.push({texto: "Email invalido"})
    }

    if(!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf ==null){
      error.push({texto: "CPF invalido"})
    }

    if(error.length > 0){
      res.status(400).send({mensagen: error});
      return req
  }

    let _alterar ={

      nome: req.body.nome,
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

    let resposta = await service.alterarDados(_alterar, req.body.cpf)
    console.log('UPDATE')
console.log(resposta)
    if (resposta){
      return res.json({
        userValid: true,
      })
    }else{
      return res.json({
        userValid: false
      })
    }

  }

module.exports = {
    alterarMatricula
}
