const User = require("./user.model");

const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

const findUserByUsername = async (username) => {
  return User.findOne({ username });
};

const createUser = async (userData) => {
  const user = new User(userData);
  return user.save();
};

const findUserById = async (id) => {
  return User.findById(id).select("-password");
};

module.exports = {
  findUserByEmail,
  findUserByUsername,
  createUser,
  findUserById,
};
