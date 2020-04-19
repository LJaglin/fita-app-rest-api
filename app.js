const express = require('express');
const bodyParser = require('body-parser');

const port = 8080;
const host = 'localhost';

const adminRoutes = require('./routes/admin');

const UserModel = require('./models/userModel');
const LoginModel = require('./models/loginModel');
 
const sequelizeConnection = require('./util/database'); //models are stored here

const app = express();

app.use(bodyParser.json());


//CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE', 'OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/admin', adminRoutes);

sequelizeConnection
    .sync()
    .then(result => {
        console.log(result)
        app.listen(port, host, () => {
            console.log(`Server is running on port: ${port}, and host: ${host}`);
        });
    })
    .catch(err => {
        console.log(err)
    });



