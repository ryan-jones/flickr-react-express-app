const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const photoRoutes = require('./photo');

router.use('/photos', photoRoutes);
router.use('/user', userRoutes);

module.exports = router;