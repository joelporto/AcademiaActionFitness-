const  Sequelize  = require("sequelize");
/* const service = require("../service/index"); */

const teste = async(req,res) =>{
    

    let data = req.body.data
    let meses = [1,2,3,4,5,6,7,8,9,10,11,12]
    for (let i in meses++)  {
        console.log(i)
    }
   
  
    /* res.status(200).send({mensagen: }) */
    
}

module.exports ={
    teste
}

