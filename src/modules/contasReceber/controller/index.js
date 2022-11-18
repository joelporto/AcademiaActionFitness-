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
    
    let pagamentos = {

        statusPago: req.body.statusPago,
        dataPagamento: dataPago,
        dataVencimento: req.body.dataVencimento,
        nomePlano: req.body.nomePlano,
        nomeConta: req.body.nomeConta,
        cpfConta: req.body.cpfConta
    }


    console.log(dataPago)

    let resultPagamento = await service.criarPagamentonoBD(pagamentos)
    if(resultPagamento){
        res.status(200).send({mensagen: "criado com sucesso"})
    }else{
        res.status(400).send({mensagen: "error interno"})
        return
    }

}

module.exports = {
    criarPagamento
}