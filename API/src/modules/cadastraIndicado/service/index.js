const { async } = require('q')
const indicadoModel = require('../../../models/indicado')

const criarIndicadoNoBD = async(_indicado)=>{
    await indicadoModel.create(_indicado).catch((err) =>{
        console.log(err)
    })
}

module.exports = {
    criarIndicadoNoBD
}