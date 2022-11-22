const { async } = require("q")
const contaModel = require("../../../models/contasReceber")

const alterarpagamento = async(_alterar , _key ,res) =>{

    let busca = await contaModel.findOne({
        where:{
            cpfConta: _key
        },
        logging: true,
        raw: true
  }).catch((err) => {
    console.log(err)
  })

  let result = await contaModel.update(_alterar , {
    where: {
        cpfConta: _key
    },
    logging: true
  }).catch((err) => {
    console.log(err)
  })
  return result
    
}

module.exports = {
    alterarpagamento
}