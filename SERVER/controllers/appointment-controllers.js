const Appointment = require('../db/models/appointment-Schema');

// 1. Get Appointment available
module.exports.getAppointment = async (req, res) => {
  const appointment = await Appointment.find();
  res
    .status(200)
    .json({ message: 'Total No.of Appointment Gets', appointment });
};

// 2) GET by Appointment id
module.exports.getAppointmentById = (req, res) => {
  res.status(200).json({ message: 'Getting Appointment By id' });
};

// 3) POST Appointment

module.exports.postAppointment = async (req, res) => {
  const { body } = req;
  const appointment = await Appointment.create(body);
  res
    .status(200)
    .json({ message: 'You can now post Appointment', Appointment });
};

// 4) PATCH Appointment by id

module.exports.patchAppointmentById = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate();
  res.status(200).json({ message: 'lets patch Appointment', Appointment });
};

// 5) DELETE all Appointment

module.exports.deleteAppointment = async (req, res) => {
  const appointment = await Appointment.deleteMany();
  res.status(200).json({ messsage: 'delete all Appointment', Appointment });
};

// 6) DELETE Appointment by id

module.exports.deleteAppointmentByID = async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete();
  res.status(200).json({ message: 'delete Appointment by id', Appointment });
};
