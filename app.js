const express = require('express');

const app = express();

const port = 8080;
const host = 'localhost';


app.listen(port, host, () => {
    console.log(`Server is running on port: ${port}, and host: ${host}`);
});