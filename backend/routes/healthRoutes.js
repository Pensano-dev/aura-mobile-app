const express = require('express');
const router = express.Router();

const healthCtrl = require('../controllers/healthController');

router.get('/server', healthCtrl.getHealth);
router.get('/db', healthCtrl.getHealthEntry);
router.post('/db', healthCtrl.addHealthEntry);

module.exports = router;
