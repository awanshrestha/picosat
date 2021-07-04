const express = require('express');
const router = express.Router();
const SatdataController = require('../controllers/SatdataController');

// For api tests
router.get('/test', SatdataController.test);

// Data Api
router.get('/getalldata', SatdataController.getAllData);
router.get('/get24hourdata', SatdataController.get24hourData);
router.get('/getndata/:numberd', SatdataController.getNdata);
router.get('/gethistorydata/:times', SatdataController.getHistoryData);

module.exports = router;