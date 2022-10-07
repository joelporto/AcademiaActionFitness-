const sequelize = require("sequelize")
const loginModel = require("../../../models/login")

const validarLoginNoBD = async (req, res) => {
  let result = await loginModel.findOne({
    where: {
      Nickname: req.body.login,
      Senha: req.body.senha
      /* Nickname: user['Nickname'],
      Senha: user['Senha'] */
    },
    raw: true
  }).catch((err) => {
    console.log(err)
  })
  return result

}


function confirmacaoLogin(res) {

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    a: 1
  }));

  return res

}



module.exports = {
  validarLoginNoBD,
  confirmacaoLogin
}
