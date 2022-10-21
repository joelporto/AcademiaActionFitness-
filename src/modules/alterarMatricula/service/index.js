const sequelize = require("sequelize")
const clientesModel = require('../../../models/clientes')

const alterarDados = async (_alterar, _key ,res) => {

  let teste = await clientesModel.findOne( {
    where: {
      cpf: _key
    },
    logging: true,
    raw: true
  }).catch((err) => {
    console.log(err)
  })

  let result = await clientesModel.update( _alterar, {
    where: {
      cpf: _key
    },
    logging: true
  }).catch((err) => {
    console.log(err)
  })
  return result
}

module.exports = {
  alterarDados
}
