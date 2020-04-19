const { Sequelize, Model } = require('sequelize');

//connection instance
const sequelize = require('../util/database');

class UserModel extends Model {}

UserModel.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user',
    underscored: true,
    freezeTableName: true
});

module.exports = UserModel;