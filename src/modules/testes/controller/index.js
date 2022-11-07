const  Sequelize  = require("sequelize");
/* const service = require("../service/index"); */

const teste = async(req,res) =>{
    
    let v1 = req.body.data
    let data = new Date();
    let dataFormatada = ((v1 )) + "/" + ((data.getMonth() + 1)) + "/" + ((data.getFullYear() + 0)); 
    console.log(dataFormatada);

    res.status(200).send({mensagen: dataFormatada})
}

module.exports ={
    teste
}

