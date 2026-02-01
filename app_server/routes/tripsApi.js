const express = require('express');
const router = express.Router();

const tripsApiCtrl = require('../controllers/tripsApi');

router.get('/trips', tripsApiCtrl.tripsList);

module.exports = router;
