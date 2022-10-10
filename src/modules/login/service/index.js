
const sequelize = require("sequelize")
const loginModel = require("../../../models/login")
const bcrypt = require('bcrypt');


const validarLoginNoBD = async (req, res) => {

/*   const myPlaintextPassword = req.body.senha;
  const hash = bcrypt.hashSync(myPlaintextPassword, 10);
  const result_bcrypt = bcrypt.compareSync(myPlaintextPassword, hash);
  console.log(result_bcrypt); // true */
  
  let result = await loginModel.findOne({
    where: {
      Nickname: req.body.login,
      Senha: req.body.senha
    },
  }).catch((err) => {
    /* console.log(err) */
  })

  bcrypt.compare(req.body.password, req.body.senha, function(err, res) {
    if (err){
      // handle error
    }
    if (res) {
      // Send JWT
    } else {
      // response is OutgoingMessage object that server response http request
    }
    console.log(req.body.senha)
  });

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
