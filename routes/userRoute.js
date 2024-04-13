const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rute untuk mengambil informasi pengguna
router.get('/users', userController.getUser);

module.exports = router;
