// DataCenterController.js
const DataCenter = require('../models/DataCenter.js');

exports.getAllDataCenters = async (req, res) => {
    try {
        const dataCenters = await DataCenter.find();
        res.json(dataCenters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDataCenterById = async (req, res) => {
    try {
        const dataCenter = await DataCenter.findById(req.params.id);
        if (!dataCenter) {
            return res.status(404).json({ message: 'Data center not found' });
        }
        res.json(dataCenter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createDataCenter = async (req, res) => {
    try {
        const newDataCenter = new DataCenter(req.body);
        const savedDataCenter = await newDataCenter.save();
        res.status(201).json(savedDataCenter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateDataCenter = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDataCenter = await DataCenter.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDataCenter) {
            return res.status(404).json({ message: 'Data center not found' });
        }
        res.json(updatedDataCenter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
