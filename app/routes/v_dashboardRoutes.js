const express = require('express');
const router = express.Router();
const carbonController = require('../controllers/v_dashboardController');
const heatController = require('../controllers/v_dashboardController');
const consumerController = require('../controllers/v_dashboardController');

// Carbon Footprint Savings API
router.get('/carbon-footprint-savings', carbonController.getCarbonFootprintSavings);

// Heat Capacity API
router.get('/heat-capacity', heatController.getHeatCapacity);

// Consumer Locations API
router.get('/consumers/locations', consumerController.getConsumerLocations);

module.exports = router;
