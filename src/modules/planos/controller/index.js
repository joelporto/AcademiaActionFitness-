const { async } = require('q')
const service = require('../service/index')

const criarDado = async(req,res)=>{

    let dados = {

        nomePlano: req.body.nomePlano,
        valor: req.body.valor

    }

    let result = await service.criarDadonoBD(dados)
    if(result){
        return res.json({
            menssagem: "tudo errado"
        })
    }else{
        return res.json({
            menssagem: "tudo certo"
        })
    }
}

module.exports = {
    criarDado
}