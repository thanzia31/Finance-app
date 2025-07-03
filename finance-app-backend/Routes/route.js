const express = require('express');
const router = express.Router();
const transController = require('../Controller/transactionController');

router.get('/getEmi',transController.getEmi)

router.post('/postEmi',transController.postEmi)

router.post('/postInvestment',transController.postInvestment)

module.exports = router;