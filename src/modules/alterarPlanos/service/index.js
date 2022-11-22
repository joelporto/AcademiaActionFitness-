const { async } = require("q")
const planoModel = require("../../../models/planos")

const alterarplanos = async(_alterar , _key) =>{

    let pesquisa = await planoModel.findOne({
        where: {
            id: _key
        },
        logging: true,
        raw: true
    }).catch((err) =>{
        console.log(err)
    })

    let result = await planoModel.update(_alterar, {
        where: {
            id: _key
        },
        logging: true
    }).catch((err) =>{
        console.log(err)
    })
    return result
}

module.exports = {
    alterarplanos
}