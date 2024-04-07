const express = require('express');
const router = express.Router();
const dataCenterController = require('../controllers/dataCenterController');

// Define routes
router.get('/', dataCenterController.getAllDataCenters);
router.get('/:id', dataCenterController.getDataCenterById);
router.post('/', dataCenterController.createDataCenter);
router.put('/:id', dataCenterController.updateDataCenter);

// Other routes...

module.exports = router;
