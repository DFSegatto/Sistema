const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require('./usuario')(sequelize, Sequelize);

module.exports = db;
