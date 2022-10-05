const { async } = require("q")
const sequelize = require("sequelize")
const service = require("../service/index")

const createLogin = async(req, res) => {
    let login = {
            
        //Nome_coluna: req.body.id_HTML,
        Nickname: req.body.Nickname,
        Nome_Funcionario: req.body.Nome_Funcionario,
        Senha: req.body.Senha
    }

    await service.createLogin(login)
}

module.exports = {
    createLogin
}