const  Sequelize  = require("sequelize");
const service = require("../service/index");

const createAluno = async(req, res) =>{
    var error = []

    if(!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null){
        error.push({texto: "CPF não invalido "})
    }

    let validarCPF= await service.validarCPFnoBD(req)

    if (validarCPF) {
        return res.json({
          userValid: true,
          nome: validarCPF['Nome'],
          email: validarCPF['Email'],
          enderoco: validarCPF['Endereco'],  
          createdAt: validarCPF['createdAt'],
          updatedAt: validarCPF['updatedAt'],
          plano: validarCPF['plano'],
          vigencia: validarCPF['vigencia'],
          nacimento: validarCPF['Nascimento'],
          telefone: validarCPF['Telefone'],
          genero: validarCPF['Sexo'],
          cep: validarCPF['CEP'],
          numero: validarCPF['Numero'],
          bairro: validarCPF['Bairro'],
          email: validarCPF['Email'],
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