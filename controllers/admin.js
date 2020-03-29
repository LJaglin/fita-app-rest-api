exports.getUsers = (req, res, next) => {
    console.log('getUsers');
    res.status(200).json({
        users: [{firstName: 'John', lastName: 'Doe'}, {firstName: 'James', lastName: 'Bond'}]
    });
};

exports.createUser = (req, res, next) => {
    console.log('createUser');
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    console.log(`first name: ${firstName}, last name : ${lastName}`);
    res.status(201).json({
        message: 'User has been created',
        user: {
            id: Math.floor(Math.random() * 100000), 
            firstName: firstName, 
            lastName: lastName
        }
    });
};