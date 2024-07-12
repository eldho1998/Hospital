const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: Number,
    required: true,
    trim: true,
  },
  street: {
    type: Number,
    required: true,
    trim: true,
  },
});

const hospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  image: {
    type: String,
  },

  address: addressSchema,
  departments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Department' }],
});

const Hospital = mongoose.model('Hospital', hospitalSchema);
module.exports = Hospital;
