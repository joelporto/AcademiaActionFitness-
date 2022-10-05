const funcionarios = require('../../../models/login')
const login = require('../controller/index')
const app = express()

app.post('/', async (req, res) => {
    const user = await login.findOne({
        attributes: ['Nickname', 'Nome_Funcionario', 'Senha' ],
        where: {
            Nickname: req.body.nickName
        } 
    })
}) 

if(user === null){
    return res.status(400).json({
        erro: true,
        mensagem: "Nickname não existe"  
    })
    return
}

if(!(await bcrypt.compare(req.body.Senha, user.Senha))){
    return res.status(400).json({
        erro: true,
        mensagem: " Senha Incorreta"
    })
}