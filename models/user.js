const { Sequelize, Model } = require('sequelize');

//connection instance
const sequelize = require('../util/database');

class User extends Model {}

User.init({
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user',
    underscored: true,
    freezeTableName: true
});

module.exports = User;