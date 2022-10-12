
const sequelize = require("sequelize")
const loginModel = require("../../../models/login")
const bcrypt = require('bcrypt');


const validarLoginNoBD = async (req, res) => {

  const myPlaintextPassword = req.body.senha
  const hash = bcrypt.hashSync(myPlaintextPassword, 5);

  bcrypt.compare(myPlaintextPassword, hash, (err, res) =>{
  })

  let result = await loginModel.findOne({
    where: {
      Nickname: req.body.login,
      Senha: hash
    },
  }).catch((err) => {
      console.log(err)
  })

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
