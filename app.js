const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

const LoginModel = require('./models/loginModel');
const User = require('./models/user');
 
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
app.use('/user', userRoutes);

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



