const UserModel = require('../models/user');
const User = require('../classes/user');

exports.addUser = (req, res, next) => {
    console.log('controller: addUser');
    const email = req.body.email;
    const password = req.body.password;
    console.log(`Data from request email: ${email}, password : ${password}`);

    const user = new User(email, password);
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
            password: password
        }
    });
};