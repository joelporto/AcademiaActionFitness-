const { async } = require("q")
const service = require("../service/index")

const alterarPlano = async(req,res) =>{
   
    let _alterar = {

        valor: req.body.valor,
        nomePlano: req.body.nomePlano,
        desc1: req.body.desc1,
        desc2: req.body.desc2,
        desc3: req.body.desc3,
        desc4: req.body.desc4,
        desc5: req.body.desc5,
        desc6: req.body.desc6,
        desc7: req.body.desc7,
        desc8: req.body.desc8

    }

    let resposta = await service.alterarplanos(_alterar , req.body.id)
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