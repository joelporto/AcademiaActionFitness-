const contasReceber = require("../../../models/contasReceber");
const service = require("../service/index")

const buscaConta = async(req,res) =>{
    var error = []

    if(!req.body.cpf || req.body.cpf == undefined || req.body.cpf == null){
        error.push({texto: "CPF invalido"})
    }

    if(error.length > 0){
        res.status(400).send({mensagen: error});
        return req
    }

    let validar = await service.validarContanoBD(req)

    if(validar == null){
        res.status(400).json({menssagem: "cliente não existe"})
    }else if(validar['vigencia'] == 'Mensal'){
        return res.json({
            nomeConta: validar['nomeConta'],
            nomePlano: validar['nomePlano'],
            valor: validar['valor'],
            vigencia: validar['vigencia'],

            dataV1: validar['dataV1'],
            dataP1: validar['dataP1'],
            statusPago1: validar['statusPago1'],
        })
    }else if(validar['vigencia'] == 'Trimestral'){
        return res.json({
            nomeConta: validar['nomeConta'],
            nomePlano: validar['nomePlano'],
            valor: validar['valor'],
            vigencia: validar['vigencia'],

            dataV1: validar['dataV1'],
            dataP1: validar['dataP1'],
            statusPago1: validar['statusPago1'],

            dataV2: validar['dataV2'],
            dataP2: validar['dataP2'],
            statusPago2: validar['statusPago2'],

            dataV3: validar['dataV3'],
            dataP3: validar['dataP3'],
            statusPago3: validar['statusPago3'],
        })
    }else if(validar['vigencia'] == 'Semestral'){
        return res.json({
            nomeConta: validar['nomeConta'],
            nomePlano: validar['nomePlano'],
            valor: validar['valor'],
            vigencia: validar['vigencia'],

            dataV1: validar['dataV1'],
            dataP1: validar['dataP1'],
            statusPago1: validar['statusPago1'],

            dataV2: validar['dataV2'],
            dataP2: validar['dataP2'],
            statusPago2: validar['statusPago2'],

            dataV3: validar['dataV3'],
            dataP3: validar['dataP3'],
            statusPago3: validar['statusPago3'],

            dataV4: validar['dataV4'],
            dataP4: validar['dataP4'],
            statusPago4: validar['statusPago4'],

            dataV5: validar['dataV5'],
            dataP5: validar['dataP5'],
            statusPago5: validar['statusPago5'],

            dataV6: validar['dataV6'],
            dataP6: validar['dataP6'],
            statusPago6: validar['statusPago6'],
        })
    }else if(validar['vigencia'] == 'Anual'){
        return res.json({
            nomeConta: validar['nomeConta'],
            nomePlano: validar['nomePlano'],
            valor: validar['valor'],
            vigencia: validar['vigencia'],

            dataV1: validar['dataV1'],
            dataP1: validar['dataP1'],
            statusPago1: validar['statusPago1'],

            dataV2: validar['dataV2'],
            dataP2: validar['dataP2'],
            statusPago2: validar['statusPago2'],

            dataV3: validar['dataV3'],
            dataP3: validar['dataP3'],
            statusPago3: validar['statusPago3'],

            dataV4: validar['dataV4'],
            dataP4: validar['dataP4'],
            statusPago4: validar['statusPago4'],

            dataV5: validar['dataV5'],
            dataP5: validar['dataP5'],
            statusPago5: validar['statusPago5'],

            dataV6: validar['dataV6'],
            dataP6: validar['dataP6'],
            statusPago6: validar['statusPago6'],

            dataV7: validar['dataV7'],
            dataP7: validar['dataP7'],
            statusPago7: validar['statusPago7'],

            dataV8: validar['dataV8'],
            dataP8: validar['dataP8'],
            statusPago8: validar['statusPago8'],

            dataV9: validar['dataV9'],
            dataP9: validar['dataP9'],
            statusPago9: validar['statusPago9'],

            dataV10: validar['dataV10'],
            dataP10: validar['dataP10'],
            statusPago10: validar['statusPago10'],

            dataV11: validar['dataV11'],
            dataP11: validar['dataP11'],
            statusPago11: validar['statusPago11'], 

            dataV12: validar['dataV12'],
            dataP12: validar['dataP12'],
            statusPago12: validar['statusPago12'],
            
        }) 
    }else{
        return res.send({menssagem: "erro interno"})
    }

}
module.exports = {
    buscaConta
}