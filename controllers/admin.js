exports.getUsers = (req, res, next) => {
    console.log('getUsers');
    res.status(200).json({
        users: [{firstName: 'John', lastName: 'Doe'}, {firstName: 'James', lastName: 'Bond'}]
    });
};