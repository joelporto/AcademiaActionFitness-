const  Sequelize  = require("sequelize");
const service = require("../service/index");

const createAluno = async(req, res) =>{
    var error = []

    if(!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null){
        error.push({texto: "CPF não invalido "})
    }

    if(error.length > 0){
      res.status(400).send({mensagen: error});
      return req
  }

    let validarCPF= await service.validarCPFnoBD(req)
    if (validarCPF) {
        return res.json({
          userValid: true,
          nome: validarCPF['nome'],
          endereco: validarCPF['endereco'],
          createdAt: validarCPF['createdAt'],
          updatedAt: validarCPF['updatedAt'],
          tipoPlano: validarCPF['tipoPlano'],
          vigencia: validarCPF['vigencia'],
          nacimento: validarCPF['nascimento'],
          telefone: validarCPF['telefone'],
          genero: validarCPF['sexo'],
          cep: validarCPF['cep'],
          numero: validarCPF['numero'],
          bairro: validarCPF['bairro'],
          email: validarCPF['email'],
          cpf: validarCPF['cpf'],
        })
      }else{
        return res.json({
          userValid: false,
        })
      }
}



module.exports = {
    createAluno
}
