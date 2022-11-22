const  Sequelize  = require("sequelize");
/* const service = require("../service/index"); */

const teste = async(req,res) =>{

    janeiro =0 
    fevereiro =1
    março =2
    abriu =3
    maio =4
    junho =5
    julho =6
    agosto =7
    setembro =8
    outubro =9
    novembro =10
    dezembro =11

    let v1 = 5
    let data = new Date();
    let dataV1
    let dataV2 
    let dataV3 
    let dataV4 
    let dataV5 
    let dataV6 
    let dataV7 
    let dataV8 
    let dataV9 
    let dataV10 
    let dataV11 
    let dataV12
    if(data.getMonth() == 11){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() + 1)) + "-" + ((08)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() + 1)) + "-" + ((09)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((10)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((11)) + "-" + ((v1))
      }else if (data.getMonth() == 10){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((12)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() + 1)) + "-" + ((08)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((9)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((10)) + "-" + ((v1))
      }else if(data.getMonth() == 9){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((11)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((08)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((09)) + "-" + ((v1))
      }else if(data.getMonth() == 8){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((10)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((08)) + "-" + ((v1))
      }else if(data.getMonth() == 7){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((9)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((07)) + "-" + ((v1))
      }else if(data.getMonth() == 6){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((8)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((06)) + "-" + ((v1))
      }else if(data.getMonth() == 5){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((7)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() )) + "-" + ((8)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((05)) + "-" + ((v1))
      }else if(data.getMonth() == 4){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((6)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() )) + "-" + ((7)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() )) + "-" + ((8)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((04)) + "-" + ((v1))
      }else if(data.getMonth() == 3){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((5)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() )) + "-" + ((6)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() )) + "-" + ((7)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() )) + "-" + ((8)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((03)) + "-" + ((v1))
      }else if(data.getMonth() == 2){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((4)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() )) + "-" + ((5)) + "-" + ((v1))
        dataV4 = ((data.getFullYear() )) + "-" + ((6)) + "-" + ((v1))
        dataV5 = ((data.getFullYear() )) + "-" + ((7)) + "-" + ((v1))
        dataV6 = ((data.getFullYear() )) + "-" + ((8)) + "-" + ((v1))
        dataV7 = ((data.getFullYear() )) + "-" + ((9)) + "-" + ((v1))
        dataV8 = ((data.getFullYear() )) + "-" + ((10)) + "-" + ((v1))
        dataV9 = ((data.getFullYear() )) + "-" + ((11)) + "-" + ((v1))
        dataV10 = ((data.getFullYear() )) + "-" + ((12)) + "-" + ((v1))
        dataV11 = ((data.getFullYear() + 1)) + "-" + ((01)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1)) + "-" + ((02)) + "-" + ((v1))
      }else if(data.getMonth() == 1){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((3)) + "-" + ((v1))
        dataV3 = ((data.getFullYear())) + "-" + ((4)) + "-" + ((v1))
        dataV4 = ((data.getFullYear())) + "-" + ((5)) + "-" + ((v1))
        dataV5 = ((data.getFullYear())) + "-" + ((6)) + "-" + ((v1))
        dataV6 = ((data.getFullYear())) + "-" + ((7)) + "-" + ((v1))
        dataV7 = ((data.getFullYear())) + "-" + ((8)) + "-" + ((v1))
        dataV8 = ((data.getFullYear())) + "-" + ((9)) + "-" + ((v1))
        dataV9 = ((data.getFullYear())) + "-" + ((10)) + "-" + ((v1))
        dataV10 = ((data.getFullYear())) + "-" + ((11)) + "-" + ((v1))
        dataV11 = ((data.getFullYear())) + "-" + ((12)) + "-" + ((v1))
        dataV12 = ((data.getFullYear() + 1 )) + "-" + ((01)) + "-" + ((v1))
      }else if(data.getMonth() == 0){
        dataV1 = ((data.getFullYear())) + "-" + ((data.getMonth() +1)) + "-" + ((v1))
        dataV2 = ((data.getFullYear())) + "-" + ((2)) + "-" + ((v1))
        dataV3 = ((data.getFullYear() )) + "-" + ((3)) + "-" + ((v1))
        dataV4 = ((data.getFullYear())) + "-" + ((4)) + "-" + ((v1))
        dataV5 = ((data.getFullYear())) + "-" + ((5)) + "-" + ((v1))
        dataV6 = ((data.getFullYear())) + "-" + ((6)) + "-" + ((v1))
        dataV7 = ((data.getFullYear())) + "-" + ((7)) + "-" + ((v1))
        dataV8 = ((data.getFullYear())) + "-" + ((8)) + "-" + ((v1))
        dataV9 = ((data.getFullYear())) + "-" + ((9)) + "-" + ((v1))
        dataV10 = ((data.getFullYear())) + "-" + ((10)) + "-" + ((v1))
        dataV11 = ((data.getFullYear())) + "-" + ((11)) + "-" + ((v1))
        dataV12 = ((data.getFullYear())) + "-" + ((12)) + "-" + ((v1))
      }

      res.json({ dataV1, dataV2,dataV3,dataV4,dataV5,dataV6,dataV7,dataV8,dataV9,dataV10,dataV11,dataV12 })

    
    
}

module.exports ={
    teste
}

