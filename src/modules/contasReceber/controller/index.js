const service = require("../service/index")

const criarPagamento = async(req,res) =>{
    var error = []

    if(!req.body.cpfConta || typeof req.body.cpfConta == undefined || req.body.cpfConta == null){
        error.push({texto: "CPF invalido "})
    }

    if(error.length > 0){
        res.status(400).send({mensagen: error});
        return req
    }

    let data = new Date();
    let dataPago = ((data.getFullYear())) + "-" + ((data.getMonth() + 1)) + "-" + ((data.getDate()))
    
    let _alterar = {

        dataP2: req.body.dataPago2,
        dataP3: req.body.dataPago3,
        dataP4: req.body.dataPago4,
        dataP5: req.body.dataPago5,
        dataP6: req.body.dataPago6,
        dataP7: req.body.dataPago7,
        dataP8: req.body.dataPago8,
        dataP9: req.body.dataPago9,
        dataP10: req.body.dataPago10,
        dataP11: req.body.dataPago11,
        dataP12: req.body.dataPago12,
        statusPago2: req.body.statusPago2,
        statusPago3: req.body.statusPago3,
        statusPago4: req.body.statusPago4,
        statusPago5: req.body.statusPago5,
        statusPago6: req.body.statusPago6,
        statusPago7: req.body.statusPago7,
        statusPago8: req.body.statusPago8,
        statusPago9: req.body.statusPago9,
        statusPago10: req.body.statusPago10,
        statusPago11: req.body.statusPago11,
        statusPago12: req.body.statusPago12,
        dataP2: req.body.dataP2,
        dataP3: req.body.dataP3,
        dataP4: req.body.dataP4,
        dataP5: req.body.dataP5,
        dataP5: req.body.dataP5,
        dataP6: req.body.dataP6,
        dataP7: req.body.dataP7,
        dataP8: req.body.dataP8,
        dataP9: req.body.dataP9,
        dataP10: req.body.dataP10,
        dataP11: req.body.dataP11,
        dataP12: req.body.dataP12,
    }


    console.log(dataPago)

    let resultP = await service.criarPnoBD(_alterar, req.body.cpf)
    if(resultP){
        res.status(200).send({mensagen: "criado com sucesso"})
    }else{
        res.status(400).send({mensagen: "error interno"})
        return
    }

}

module.exports = {
    criarPagamento
}