const { async } = require('q')
const service = require('../service/index')

const criarIndicado = async(req,res) =>{
    var error = []

    if(!req.body.cpf || req.body.cpf == null || req.body.cpf == undefined){
        error.push({texto: "CPF invalido"})
    }
    if(!req.body.cpfInd || req.body.cpfInd == null || req.body.cpfInd == undefined){
        error.push({texto: "CPF do indicado invalido"})
    }
    if(!req.body.nomeInd || req.body.nomeInd == null || req.body.nomeInd == undefined){
        error.push({texto: "Nome invalido"})
    }
    if(!req.body.telInd || req.body.telInd == null || req.body.telInd == undefined){
        error.push({texto: "invalido"})
    }
    
    if(error.length > 0){
        res.status(400).send({mensagen: error});
        return req
    }

    let indicado = {
        cpf: req.body.cpf,
        cpfInd: req.body.cpfInd,
        nomeInd: req.body.nomeInd,
        telInd: req.body.telInd,
        dataLiberacao: dataLibe
    }

    let ind = await service.criarIndicadoNoBD(indicado)
    if(ind){
        return res.json({
            mensagen: "cadastrado com sucesso"
        })
    }else{
        return res.json({
            mensagen: "erro interno"
        })
    }
}

module.exports = {
    criarIndicado
}