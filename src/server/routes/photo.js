const express = require('express');
const router = express.Router();
const photoCtrl = require('../controllers/photo');

router.get('/', photoCtrl.getPhotos);

module.exports = router;

