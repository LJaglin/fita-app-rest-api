const express = require('express');
const bodyParser = require('body-parser');

const port = 8080;
const host = 'localhost';

const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.json());

app.use('/admin', adminRoutes);


app.listen(port, host, () => {
    console.log(`Server is running on port: ${port}, and host: ${host}`);
});