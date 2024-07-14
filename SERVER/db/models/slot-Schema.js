const mongoose = require('mongoose');

const slotSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  availableSlots: {
    type: Number,
    required: true,
  },
  doctorID: [{ type: mongoose.Types.ObjectId, ref: 'Doctor' }],
});

const Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot;
