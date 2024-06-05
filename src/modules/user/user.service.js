const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserRepository = require("./user.repository");
const { jwtSecret } = require("../../configs");

const registerUser = async (userData) => {
  const { username, email, password } = userData;

  // Check if the email already exists
  let userByEmail = await UserRepository.findUserByEmail(email);
  if (userByEmail) {
    throw new Error("Email already in use");
  }

  // Check if the username already exists
  let userByUsername = await UserRepository.findUserByUsername(username);
  if (userByUsername) {
    throw new Error("Username already in use");
  }

  user = await UserRepository.createUser({
    username,
    email,
    password,
  });
  return user;
};

const loginUser = async (loginData) => {
  const { username, password } = loginData;
  const user = await UserRepository.findUserByUsername(username);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Password does not match");
  }

  const payload = { user: { id: user.id } };
  const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });

  return token;
};

const updateUser = async (id, userData) => {
  // Check if the new username or email already exists in another user
  if (userData.username || userData.email) {
    const existingUser = await UserRepository.findByUsernameOrEmail(
      userData.username,
      userData.email,
      id
    );
    if (existingUser) {
      throw new Error("Username or email already in use by another account");
    }
  }

  if (userData.password) {
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
  }

  // Proceed with updating the user
  return UserRepository.updateUser(id, userData);
};

const deleteUser = async (id) => {
  return UserRepository.deleteUser(id);
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
