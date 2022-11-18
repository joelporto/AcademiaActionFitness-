const { async } = require("q")
const service = require("../service/index")

const alterarPlano = async(req,res) =>{
    var error = []

    if(!req.body.valor || typeof req.body.valor == undefined || req.body.valor ==null){
        error.push({texto: "Valor invalido"})
      }

      if(error.length > 0){
        res.status(400).send({mensagen: error});
        return req
    }

    let _alterar = {

        valor: req.body.valor

    }

    let resposta = await service.alterarplanos(_alterar , req.body.nomePlano)
    console.log('UPDATE')
    console.log(resposta)
    if(resposta){
        return res.json({
            menssagem: "Alterado com sucesso"
        })
    }else{
        return res.json({
            menssagem: "Erro"
        })
    }
}

module.exports = {
    alterarPlano
}