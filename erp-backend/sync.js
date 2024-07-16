const db = require('./src/models');

(async () => {
  try {
    await db.sequelize.sync({ force: true }); // force: true recria as tabelas
    console.log('Database synchronized successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error synchronizing database:', error);
    process.exit(1);
  }
})();