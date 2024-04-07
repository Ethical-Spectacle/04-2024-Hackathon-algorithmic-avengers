const carbonSavingsData = [
    { date: '2022-01-01', savings: 100 },
    { date: '2022-01-02', savings: 150 },
    { date: '2022-01-03', savings: 200 }
];
  
const heatCapacityData = { value: 500 };

const consumerLocationsData = [
    { name: 'Consumer 1', lat: 51.5074, lng: -0.1278 },
    { name: 'Consumer 2', lat: 52.5200, lng: 13.4050 },
    // Add more consumer locations as needed
];

exports.getCarbonFootprintSavings = (req, res) => {
    res.json(carbonSavingsData);
  };
  
exports.getHeatCapacity = (req, res) => {
    res.json(heatCapacityData);
};
  
exports.getConsumerLocations = (req, res) => {
    res.json(consumerLocationsData);
};
  