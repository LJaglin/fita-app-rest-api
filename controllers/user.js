const User = require('../models/user');

exports.addUser = (req, res, next) => {
    console.log('addUser');
    const email = req.body.email;
    const password = req.body.password;
    console.log(`email: ${email}, password : ${password}`);

    // const newUser = new UserClass(firstName, lastName, Date.now(), Date.now());
    // newUser.generateLog();

    // //UserModel.create(newUser).then(result => console.log(result)).catch(err => console.log(err));
    // UserModel.create(newUser)
    //         .then(result => console.log(result))
    //         .catch(err => console.log(err));

    res.status(201).json({
        message: 'User has been created',
        user: {
            email: email,
            password: password
        }
    });
};