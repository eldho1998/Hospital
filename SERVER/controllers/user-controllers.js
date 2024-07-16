const User = require('../db/models/user-Schema');

// 1. Get Users
module.exports.getUsers = async (req, res) => {
  const user = await User.find();
  res.status(200).json({ message: 'Get all Users', user });
};

// 2. Get users by id
module.exports.getUsersById = async (req, res) => {
  //   const { id } = req.params;
  const user = await User.find();
  res.status(200).json({ message: 'Get All users by id' });
};

//3 . Post Users
module.exports.postUsers = async (req, res) => {
  //   const { body } = req;
  const user = await User.create();
  res.status(200).json({ message: 'Post Users' });
};

// 4. Patch Users

module.exports.patchUsers = async (req, res) => {
  //   const { body } = req;
  const user = await User.findByIdAndUpdate();
  res.status(200).json({ message: 'Patch Users' });
};

// 5. delete all Users

module.exports.deleteAllUsers = async (req, res) => {
  const user = await User.deleteMany();
  res.status(200).json({ message: 'delete all users' });
};

// 6. Delete  Users by id

module.exports.deleteUserById = async (req, res) => {
  const user = await User.findByIdAndDelete();
  res.status(200).json({ message: 'delete user by id' });
};
