const express = require('express');
const getPhotos = require('../controllers/photo');
const router = express.Router();

router.get('/', getPhotos);

module.exports = router;

