const Sequelize = require('sequelize')

//const sequelize = new Sequelize(DataBase, root, Senha, {
//segunda SENHA 'Uk624100@'
const sequelize = new Sequelize('Actionfitness_project', 'root', 'lima1806', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    logging: true 
});

module.exports = async () => {
  let promise = await new Promise(function(resolve, reject) {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connected to Schema ActionFitness_Project!')
        resolve(sequelize)
      })
      .catch(err => {
        console.log('Not connected to Schema ActionFitness_Project!')
        console.error(err)
        reject()
      })
  })

  return promise
}
