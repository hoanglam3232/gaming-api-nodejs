const { check, validationResult } = require("express-validator");
const userService = require("./user.service");
const ApiError = require("../../utils/ApiError");

// Registration logic with validation checks
const register = [
  check("username", "Username is required").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ApiError(400, "Validation Error", errors.array()));
    }

    try {
      const user = await userService.registerUser(req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
];

const login = [
  check("username", "Username is required").not().isEmpty(),
  check("password", "Password is required").exists(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ApiError(400, "Validation Error", errors.array()));
    }

    try {
      const token = await userService.loginUser(req.body);
      res.json({ token });
    } catch (err) {
      next(err);
    }
  },
];

const getProfile = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.user.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = [
  check("username").optional().isAlphanumeric().trim(),
  check("email").optional().isEmail().normalizeEmail(),
  check("password").optional().isLength({ min: 6 }).trim(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ApiError(400, "Validation Error", errors.array()));
    }

    try {
      const user = await userService.updateUser(req.user.id, req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
];

const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.user.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
  getProfile,
  updateUser,
  deleteUser,
};
