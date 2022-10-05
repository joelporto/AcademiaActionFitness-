const  Sequelize  = require("sequelize");
const service = require("../service/index");


const createMatricula = async(req,res) =>{
    
    let matricula = {

      //Nome_coluna: req.body.id_HTML
        Nome: req.body.nome,
        Cpf: req.body.cpf,
        Nascimento: req.body.nasc,
        Sexo: req.body.genero,
        Telefone: req.body.telefone,
        CEP: req.body.cep,
        Endereco: req.body.endereco,
        Numero: req.body.numero,
        Bairro: req.body.bairro,
        /* Email: req.body.id, */

    }

    
     await service.createMatricula(matricula) 

}


const getMatriculas = async(req,res) =>{
    res.status = 200



}

module.exports = { 
    createMatricula,
    getMatriculas
    
};