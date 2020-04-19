const { Sequelize, Model } = require('sequelize');

//connection instance
const sequelize = require('../util/database');

class LoginModel extends Model {}

LoginModel.init({
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
}, {
    sequelize, 
    modelName: 'login',
    underscored: true,
    freezeTableName: true
});

// LoginModel.belongsTo(UserModel);

// UserModel.hasOne(LoginModel);

module.exports = LoginModel;


