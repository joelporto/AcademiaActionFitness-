const Sequelize = require("sequelize")
const service = require("../service/index")

const cadastarFornecedor = async(req,res) =>{
    var error = []

    if(!req.body.bairro || typeof req.body.bairro == undefined || req.body.bairro == null){
        error.push({texto: "Bairro invalido"})
    }

    if(!req.body.cep || typeof req.body.cep == undefined || req.body.cep == null){
        error.push({texto: "CEP     invalido"})
    }

    if(!req.body.cnpj || typeof req.body.cnpj == undefined || req.body.cnpj == null){
        error.push({texto: "CNPJ invalido"})
    }

    if(!req.body.e_mail || typeof req.body.e_mail == undefined || req.body.e_mail == null){
        error.push({texto: "Email invalido"})
    }

    if(!req.body.endereco || typeof req.body.endereco == undefined || req.body.endereco == null){
        error.push({texto: "Endereço invalido"})
    }

    if(!req.body.numero || typeof req.body.numero == undefined || req.body.numero == null){
        error.push({texto: "Numero invalido"})
    }

    if(!req.body.pais || typeof req.body.pais == undefined || req.body.pais == null){
        error.push({texto: "Pais invalido"})
    }

    if(!req.body.razao_social || typeof req.body.razao_social == undefined || req.body.razao_social == null){
        error.push({texto: "Razão Social invalido"})
    }

    if(!req.body.telefone || typeof req.body.telefone == undefined || req.body.telefone == null){
        error.push({texto: "Telefone invalido"})
    }

    if(!req.body.uf || typeof req.body.uf == undefined || req.body.uf == null){
        error.push({texto: "UF invalido"})
    }

    if(!req.body.ie_rg || typeof req.body.ie_rg == undefined || req.body.ie_rg == null){
        error.push({texto: "IE/RG invalido"})
    }

    if(!req.body.cidade || typeof req.body.cidade == undefined || req.body.cidade == null){
        error.push({texto: "Cidade invalido"})
    }

    if(!req.body.fisica_juridica || typeof req.body.fisica_juridica == undefined || req.body.fisica_juridica == null){
        error.push({texto: "Status invalido"})
    }

    if(error.length > 0 ){
        res.status(400).send({menssagen: error})
        return req
    }

    let validarFor = await service.validarFornecedor(req)

    if(validarFor){
        res.status(400).send({menssagen: "Fornecedor já existe"})
        return 
    }else{
        res.status(200).send({menssagen: "Fornecedor cadastrado"})
    }

    let Fornecedor = {
        cpfCnpj: req.body.cnpj,
        razaoSocial: req.body.razao_social,
        emailFor: req.body.e_mail,
        tel1: req.body.telefone,
        cep: req.body.cep,
        rua: req.body.endereco,
        pais:req.body.pais,
        uf: req.body.uf,
        bairroFor: req.body.bairro,
        numeroFor: req.body.numero,
        cidade: req.body.cidade,
        pessoal: req.body.fisica_juridica
    }

    await service.criarFornecedornoBD(Fornecedor)

}

module.exports = {
    cadastarFornecedor
}