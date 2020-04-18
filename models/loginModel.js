const { Sequelize, Model } = require('sequelize');

const UserModel = require('./userModel');

//connection instance
const sequelize = require('../util/database');

class loginModel extends Model {}
loginModel.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    passwordSalt: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    passwordHash: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, 
{
    sequelize, 
    modelName: 'login'
});

loginModel.belongsTo(UserModel);

// UserModel.hasOne(loginModel);


module.exports = loginModel;
