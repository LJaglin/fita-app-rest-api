const UserModel = require('../models/user');
const User = require('../classes/user');

const bcrypt = require('bcryptjs');

exports.addUser = (req, res, next) => {
    console.log('controller: addUser');
    const email = req.body.email;
    const password = req.body.password;
    console.log(`Data from request email: ${email}, password : ${password}`);

    const passwordHash = bcrypt.hashSync(password, 4);
    console.log(`Password after hash: ${passwordHash}`);

    const user = new User(email, passwordHash);
    user.generateLog();

    UserModel.create({
            email: user._email,
            password: user._password
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));

    res.status(201).json({
        message: 'User has been created',
        user: {
            email: email,
            password: passwordHash
        }
    });
};