const { Sequelize } = require('sequelize');

// databes connection config
const sequelizeConnection = new Sequelize('fit_app_db', 'creator', 'root666@#', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelizeConnection;