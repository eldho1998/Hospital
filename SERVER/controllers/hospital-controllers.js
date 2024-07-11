const Hospital = require('../db/models/hospital-Schema');

//1) GET all Hospitals
module.exports.getHospital = async (req, res) => {
  const response = await Hospital.find();
  res.status(200).json({ message: 'Get all Hospitals', response });
};
