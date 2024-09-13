const  Sequelize  = require("sequelize");
const service = require("../service/index");


const createMatricula = async(req,res) =>{
    var error = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
      error.push({texto: "Nome invalido"})
    }

    if(!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null){
      error.push({texto: "CPF invalido"})
    }

    if(!req.body.nasc || typeof req.body.nasc == undefined || req.body.nasc == null){
      error.push({texto: "Data de Nacimento invalido"})
    }

    if(!req.body.telefone || typeof req.body.telefone == undefined || req.body.telefone == null){
      error.push({texto: "Nome invalido"})
    }

    if(!req.body.cep || typeof req.body.cep == undefined || req.body.cep == null){
      error.push({texto: "Nome invalido"})
    }

    if(!req.body.endereco || typeof req.body.endereco == undefined || req.body.endereco == null){
      error.push({texto: "Nome invalido"})
    }

    if(!req.body.numero || typeof req.body.numero == undefined || req.body.numero == null){
      error.push({texto: "Nome invalido"})
    }

    if(!req.body.bairro || typeof req.body.bairro == undefined || req.body.bairro == null){
      error.push({texto: "Nome invalido"})
    }

    if(!req.body.genero || typeof req.body.genero == undefined || req.body.genero == null){
      error.push({texto: "Gernero invalido"})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
      error.push({texto: "Email invalido"})
    }

    if(!req.body.plan || typeof req.body.plan == undefined || req.body.plan == null){
      error.push({texto: "Plano invalido"})
    }

    if(!req.body.vigencia || typeof req.body.vigencia == undefined || req.body.vigencia == null){
      error.push({texto: "vigencia invalido"})
    }

    if(!req.body.data|| typeof req.body.data == undefined || req.body.data == null){
      error.push({texto: "vencimento invalido"})
    }

  if(error.length > 0){
    res.status(400).send({mensagen: error});
    return req
}

let validarMatricula =  await service.validarMatricula(req)
if(validarMatricula){
    res.status(400).send({mensagen: "Erro: matricula já existe"});
    return
}else{

    let cliente = {

      //Nome_colunaBD: req.body.id_HTML
        nome: req.body.nome,
        cpf: req.body.cpf,
        nascimento: req.body.nasc,
        telefone: req.body.telefone,
        cep: req.body.cep,
        endereco: req.body.endereco,
        numero: req.body.numero,
        bairro: req.body.bairro,
        sexo: req.body.genero,
        email: req.body.email,
        tipoPlano: req.body.plan,
        vigencia: req.body.vigencia,
        vencimento:req.body.data

    }

    let valor
    if(req.body.plan == 'Plano Completo'){
      valor = 99.90
    }else if(req.body.plan == 'Plano Familiar-Basico'){
      valor = 63.90
    }else if(req.body.plan == 'Plano Familiar-Completo'){
      valor = 89.90
    }else if(req.body.plan == 'Plano Especializado'){
      valor = 120
    }else{
      valor = 70
    }

    let vigencia = req.body.vigencia
    let v1 = req.body.data
    let data = new Date();
    let dataV1,dataV2,dataV3,dataV4,dataV5,dataV6,dataV7,dataV8,dataV9,dataV10,dataV11,dataV12
    if(data.getMonth() == 11){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() + 1)) + "-" + ((08)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() + 1)) + "-" + ((09)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((10)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((11)) + "-" + ((v1))
    }else if (data.getMonth() == 10){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((12)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() + 1)) + "-" + ((08)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((9)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((10)) + "-" + ((v1))
    }else if(data.getMonth() == 9){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((11)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((08)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((09)) + "-" + ((v1))
    }else if(data.getMonth() == 8){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((10)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((08)) + "-" + ((v1))
    }else if(data.getMonth() == 7){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((9)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
    }else if(data.getMonth() == 6){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((8)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
    }else if(data.getMonth() == 5){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((7)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() )) + "-" + ((8)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
    }else if(data.getMonth() == 4){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((6)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() )) + "-" + ((7)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() )) + "-" + ((8)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
    }else if(data.getMonth() == 3){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((5)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() )) + "-" + ((6)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() )) + "-" + ((7)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() )) + "-" + ((8)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
    }else if(data.getMonth() == 2){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((4)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() )) + "-" + ((5)) + "-" + ((v1))
      dataV4 = ((data.getFullYear() )) + "-" + ((6)) + "-" + ((v1))
      dataV5 = ((data.getFullYear() )) + "-" + ((7)) + "-" + ((v1))
      dataV6 = ((data.getFullYear() )) + "-" + ((8)) + "-" + ((v1))
      dataV7 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
      dataV8 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
      dataV9 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
      dataV10 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
      dataV11 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
    }else if(data.getMonth() == 1){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((3)) + "-" + ((v1))
      dataV3 = ((data.getFullYear())) + "-" + ((4)) + "-" + ((v1))
      dataV4 = ((data.getFullYear())) + "-" + ((5)) + "-" + ((v1))
      dataV5 = ((data.getFullYear())) + "-" + ((6)) + "-" + ((v1))
      dataV6 = ((data.getFullYear())) + "-" + ((7)) + "-" + ((v1))
      dataV7 = ((data.getFullYear())) + "-" + ((8)) + "-" + ((v1))
      dataV8 = ((data.getFullYear())) + "-" + ((9)) + "-" + ((v1))
      dataV9 = ((data.getFullYear())) + "-" + ((10)) + "-" + ((v1))
      dataV10 = ((data.getFullYear())) + "-" + ((11)) + "-" + ((v1))
      dataV11 = ((data.getFullYear())) + "-" + ((12)) + "-" + ((v1))
      dataV12 = ((data.getFullYear() + 1 )) + "-" + ((01)) + "-" + ((v1))
    }else if(data.getMonth() == 0){
      dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
      dataV2 = ((data.getFullYear())) + "-" + ((2)) + "-" + ((v1))
      dataV3 = ((data.getFullYear() )) + "-" + ((3)) + "-" + ((v1))
      dataV4 = ((data.getFullYear())) + "-" + ((4)) + "-" + ((v1))
      dataV5 = ((data.getFullYear())) + "-" + ((5)) + "-" + ((v1))
      dataV6 = ((data.getFullYear())) + "-" + ((6)) + "-" + ((v1))
      dataV7 = ((data.getFullYear())) + "-" + ((7)) + "-" + ((v1))
      dataV8 = ((data.getFullYear())) + "-" + ((8)) + "-" + ((v1))
      dataV9 = ((data.getFullYear())) + "-" + ((9)) + "-" + ((v1))
      dataV10 = ((data.getFullYear())) + "-" + ((10)) + "-" + ((v1))
      dataV11 = ((data.getFullYear())) + "-" + ((11)) + "-" + ((v1))
      dataV12 = ((data.getFullYear())) + "-" + ((12)) + "-" + ((v1))
    } 
      
    let dataPago = ((data.getFullYear())) + "-" + ((data.getMonth() + 1)) + "-" + ((data.getDate()))
   
    if(vigencia == 'Mensal'){

      let contas = {
        valor: valor,
        nomeConta: req.body.nome,
        vigencia: req.body.vigencia,
        cpfConta: req.body.cpf, 
        nomePlano: req.body.plan,
        statusPago1: 'Pago' ,
        dataP1: dataPago,
        dataV1: dataV1,
      }
      await service.criarContasnoBD(contas)
    }else if(vigencia == 'Trimestral'){

      let valorTotal = valor * 3
      let valorDesconto = valorTotal * 0.15
      let valorResultado = valorTotal - valorDesconto

      let contas = {
        valor: valorResultado / 3,
        nomeConta: req.body.nome,
        vigencia: req.body.vigencia,
        cpfConta: req.body.cpf, 
        nomePlano: req.body.plan,
        statusPago1: 'Pago' ,
        dataP1: dataPago,
        dataV1: dataV1,
        dataV2: dataV2,
        dataV3: dataV3,
      }
      await service.criarContasnoBD(contas)
    }else if(vigencia == 'Semestral'){

      let valorTotal = valor * 6
      let valorDesconto = valorTotal * 0.20
      let valorResultado = valorTotal - valorDesconto
      
      let contas ={
        valor: valorResultado / 6,
        nomeConta: req.body.nome,
        vigencia: req.body.vigencia,
        cpfConta: req.body.cpf, 
        nomePlano: req.body.plan,
        statusPago1: 'Pago' ,
        dataP1: dataPago,
        dataV1: dataV1,
        dataV2: dataV2,
        dataV3: dataV3,
        dataV4: dataV4,
        dataV5: dataV5,
        dataV6: dataV6,
      }
      await service.criarContasnoBD(contas)
    }else if(vigencia == 'Anual'){

      let valorTotal = valor * 12
      let valorDesconto = valorTotal * 0.30
      let valorResultado = valorTotal - valorDesconto

      let contas = {
        valor: valorResultado / 12,
        nomeConta: req.body.nome,
        vigencia: req.body.vigencia,
        cpfConta: req.body.cpf, 
        nomePlano: req.body.plan,
        statusPago1: 'Pago' ,
        dataP1: dataPago,
        dataV1: dataV1,
        dataV2: dataV2,
        dataV3: dataV3,
        dataV4: dataV4,
        dataV5: dataV5,
        dataV6: dataV6,
        dataV7: dataV7,
        dataV8: dataV8,
        dataV9: dataV9,
        dataV10: dataV10,
        dataV11: dataV11,
        dataV12: dataV12,
      }
      await service.criarContasnoBD(contas)
    }else{
      return res.send({menssagem: "erro interno"})
    }
 
    await service.criarclienteNoBD(cliente)
    res.send({menssagem: "Criado com Sucesso"})

    
}
}

module.exports = {
    createMatricula
};
