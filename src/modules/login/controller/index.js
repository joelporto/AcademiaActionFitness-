const sequelize = require("sequelize")
const service = require("../service/index")
const bcrypt = require('bcrypt')

const validarLoginNoBD = async (req, res) => {
  var error = []

  if (!req.body.login || typeof req.body.login == undefined || req.body.login == null) {
    error.push({
      texto: "NickName invalido"
    })
  }

  if (!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null) {
    error.push({
      texto: "Senha invalida"
    })
  }

  if (error.length > 0) {
    res.status(400).send({
      mensagen: error
    });
    return req
  }

  let validarLoginBD = await service.validarLoginNoBD(req)

  if (validarLoginBD) {
    return res.json({
      userValid: true,
      token: '',
      nickName: validarLoginBD['Nickname'],
      createdAt: validarLoginBD['createdAt'],
      updatedAt: validarLoginBD['updatedAt']
    })
  }else{
    return res.json({
      userValid: false,
    })
  }



}

module.exports = {
  validarLoginNoBD,
}
