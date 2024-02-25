const express = require('express');
const router = express.Router();

const cafeCtrl = require('../controllers/cafeController');

router.get('/selected', cafeCtrl.getCafesByFacilities);

module.exports = router;
