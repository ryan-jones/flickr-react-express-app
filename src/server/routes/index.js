const express = require('express');
const userRoutes = require('./user');
const photoRoutes = require('./photo');
const router = express.Router();

router.use('/photos', photoRoutes);
router.use('/user', userRoutes);

module.exports = router;