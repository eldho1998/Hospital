const Hospital = require('../db/models/hospital-Schema');

//1) GET all Hospitals
module.exports.getHospitals = async (req, res) => {
  const response = await Hospital.find();
  res.status(200).json({ message: 'Get all Hospitals', response });
};

// 2) GET by Hospital id
module.exports.getHospitalsById = (req, res) => {
  res.status(200).json({ message: 'Getting Hospital By id' });
};

// 3) POST Hospital

module.exports.postHospitals = async (req, res) => {
  const hospital = await Hospital.create({
    name: req.body.name,
    image: `http//:localhost:${process.env.PORT}/uploads/${req.file.filename}`,
  });
  res.status(200).json({ message: 'You can now post hospitals', hospital });
};

// 4) PATCH hospitals by id

module.exports.patchHospitalsById = async (req, res) => {
  const hospital = await Hospital.findByIdAndUpdate();
  res.status(200).json({ message: 'lets patch hospitals', hospital });
};

// 5) DELETE all hospitals

module.exports.deleteHospitals = async (req, res) => {
  const hospital = await Hospital.deleteMany();
  res.status(200).json({ messsage: 'delete all departments', hospital });
};

// 6) DELETE hospital by id

module.exports.deleteHospitalsByID = async (req, res) => {
  const hospital = await Hospital.findByIdAndDelete();
  res.status(200).json({ message: 'delete dept by id', hospital });
};
