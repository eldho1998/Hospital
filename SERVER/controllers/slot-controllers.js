const Slot = require('../db/models/slot-Schema');

// 1. Get Slots available
module.exports.getSlots = async (req, res) => {
  const slot = await Slot.find();
  res.status(200).json({ message: 'Total No.of Slots Gets' });
};

// 2) GET by Slots id
module.exports.getSlotsById = (req, res) => {
  res.status(200).json({ message: 'Getting Slots By id' });
};

// 3) POST Slots

module.exports.postSlots = async (req, res) => {
  const { body } = req;
  const slot = await Slot.create(body);
  res.status(200).json({ message: 'You can now post Slots', Slot });
};

// 4) PATCH Slots by id

module.exports.patchSlotsById = async (req, res) => {
  const slot = await Slot.findByIdAndUpdate();
  res.status(200).json({ message: 'lets patch Slots', Slot });
};

// 5) DELETE all Slots

module.exports.deleteSlots = async (req, res) => {
  const slot = await Slot.deleteMany();
  res.status(200).json({ messsage: 'delete all slots', Slot });
};

// 6) DELETE Slot by id

module.exports.deleteSlotsByID = async (req, res) => {
  const slot = await Slot.findByIdAndDelete();
  res.status(200).json({ message: 'delete slots by id', Slot });
};
