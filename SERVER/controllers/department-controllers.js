const Department = require('../db/models/department-Schema');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// 1) GET departments from api

module.exports.getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.status(200).json({ message: 'Get All Departments' }, departments);
};

// 2) GET by department id
module.exports.getDepartmentsById = (req, res) => {
  res.status(200).json({ message: 'Getting Department By id' });
};

// 3) POST departments

module.exports.postDepartments = async (req, res) => {
  const department = await Department.create({
    name: req.body.name,
    image: `http//:localhost:${process.env.PORT}/uploads/${req.file.filename}`,
  });
  res.status(200).json({ message: 'You can now post departments', department });
};

// 4) PATCH departments

module.exports.patchDepartments = (req, res) => {
  res.status(200).json({ message: 'lets patch departments' });
};

// 5) DELETE departments

module.exports.deleteDepartments = (req, res) => {
  res.status(200).json({ messsage: 'delete all departments' });
};

// 6) DELETE by department id

module.exports.deleteDepartmentsByID = (req, res) => {
  res.status(200).json({ message: 'delete dept by id' });
};
