const express = require('express');
const router = express.Router();
const dataCentersController = require('../controllers/dataCentersController');

// Define routes
router.get('/', dataCentersController.getAllDataCenters);
router.get('/:id', dataCentersController.getDataCenterById);
router.post('/', dataCentersController.createDataCenter);
// Other routes...

module.exports = router;
