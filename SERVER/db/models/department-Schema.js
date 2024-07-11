const mongoose = require('mongoose');

const DepartmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model('Department', DepartmentSchema);
module.exports = Department;
