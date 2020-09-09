const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

//GET /admin/users
router.post('/addUser', userController.addUser);

module.exports = router;