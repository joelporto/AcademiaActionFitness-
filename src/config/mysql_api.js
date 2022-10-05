const Sequelize = require('sequelize')

//const sequelize = new Sequelize(DataBase, root, Senha, {
const sequelize = new Sequelize('ActionFitness_Project', 'root', 'lima1806', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
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