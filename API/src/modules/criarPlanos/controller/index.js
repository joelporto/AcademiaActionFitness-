const service = require('../service/index')

const criarPlano = async(req,res) =>{

    let plano = {
        nomePlano: req.body.nomePlano,
        valor: req.body.valor,
        desc1: req.body.desc1,
        desc2: req.body.desc2,
        desc3: req.body.desc3,
        desc4: req.body.desc4,
        desc5: req.body.desc5,
        desc6: req.body.desc6,
        desc7: req.body.desc7,
        desc8: req.body.desc8
    }

    await service.criar(plano)
}

module.exports = {   
    criarPlano 
}