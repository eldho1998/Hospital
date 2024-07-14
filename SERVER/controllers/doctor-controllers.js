const Doctor = require('../db/models/doctor-Schema');

// 1) GET all Doctors (rejux)
module.exports.getDoctors = async (req, res) => {
  const response = await Doctor.find();
  res.status(200).json({ message: 'Get all Doctors', response });
};

// 2) GET by Doctor id
module.exports.getDoctorById = (req, res) => {
  res.status(200).json({ message: 'Getting Doctors By id' });
};

// 3) POST Doctors

module.exports.postDoctors = async (req, res) => {
  // const doctor = await Doctor.create({
  //   name: req.body.name,
  //   image: `http//:localhost:${process.env.PORT}/uploads/${req.file.filename}`,
  // });
  res.status(200).json({ message: 'You can now post doctors' });
};

// 4) PATCH Doctor by id

module.exports.patchDoctorById = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate();
  res.status(200).json({ message: 'lets patch doctors', doctor });
};

// 5) DELETE all Doctors

module.exports.deleteDoctors = async (req, res) => {
  const doctor = await Doctor.deleteMany();
  res.status(200).json({ messsage: 'delete all doctors', doctor });
};

// 6) DELETE Doctor by id

module.exports.deleteDoctorByID = async (req, res) => {
  const doctor = await Doctor.findByIdAndDelete();
  res.status(200).json({ message: 'delete doctor by id', doctor });
};
