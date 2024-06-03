const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserRepository = require("./user.repository");
const { jwtSecret } = require("../../configs");

const registerUser = async (userData) => {
  const { username, email, password } = userData;

  let user = await UserRepository.findUserByEmail(email);
  if (user) {
    throw new Error("User already exists");
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
    console.log("User not found");
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(`Password comparison result: ${isMatch}`);
  if (!isMatch) {
    console.log("Password does not match");
    throw new Error("Invalid credentials");
  }

  const payload = { user: { id: user.id } };
  const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });

  return token;
};

const getUserById = async (id) => {
  return UserRepository.findUserById(id);
};

module.exports = {
  registerUser,
  loginUser,
  getUserById,
};
