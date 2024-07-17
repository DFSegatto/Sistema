const { Sequelize } = require('sequelize');
const config = require('./config.json').development;

// Crie uma inst�ncia do Sequelize com os par�metros do banco de dados do arquivo config.json
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: console.log,  // Habilita o log SQL
});

module.exports = sequelize;
