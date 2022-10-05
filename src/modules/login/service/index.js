const { async } = require("q")
const sequelize = require("sequelize")
const loginModel = require("../../../models/login")

const createLogin = async (_login) =>{
    await loginModel.findOne({
        where: _login
    }) 
}

module.exports = {
    createLogin,
}
