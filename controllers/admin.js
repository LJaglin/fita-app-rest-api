const UserModel = require('../models/userModel');
const UserClass = require('../classes/user');

exports.getUsers = (req, res, next) => {
    console.log('getUsers');

    UserModel.findAll()
        .then(users => {
            console.log(users);
            console.log(Object.keys(users).length);
            if (!users || Object.keys(users).length === 0) {
                const error = new Error('Could not find users.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({message: 'Fetched users successfully.', users: users});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.createUser = (req, res, next) => {
    console.log('createUser');
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    //console.log(`first name: ${firstName}, last name : ${lastName}`);

    const newUser = new UserClass(firstName, lastName, Date.now(), Date.now());
    newUser.generateLog();

    //UserModel.create(newUser).then(result => console.log(result)).catch(err => console.log(err));
    UserModel.create(newUser)
            .then(result => console.log(result))
            .catch(err => console.log(err));

    res.status(201).json({
        message: 'User has been created',
        user: {
            id: Math.floor(Math.random() * 100000),
            firstName: firstName,
            lastName: lastName
        }
    });
};