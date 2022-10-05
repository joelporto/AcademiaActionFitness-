const sequelize  = require("sequelize");
const matriculasModel = require("../../../models/clientes")


const createMatricula = async(_matricula) =>{
 await matriculasModel.create(_matricula) 
    
}


const getMatriculas = async(req,res) =>{
    res.status = 200



}

module.exports = { 
    createMatricula,
    getMatriculas
    
};