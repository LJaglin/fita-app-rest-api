const { Sequelize } = require('sequelize');

// databes configuration
const sequelize = new Sequelize('fit_app_db', 'creator', 'root666@#', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;