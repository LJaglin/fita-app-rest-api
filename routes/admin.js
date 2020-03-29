const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

//GET /admin/users
router.get('/users', adminController.getUsers);

router.post('/createUser', adminController.createUser);

module.exports = router;