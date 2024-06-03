const express = require("express");
const userController = require("./user.controller");
const { authMiddleware } = require("../../middlewares");

const router = express.Router();

// routes
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/me", authMiddleware, userController.getProfile);
router.put("/me", authMiddleware, userController.updateUser);
router.delete("/me", authMiddleware, userController.deleteUser);

module.exports = router;
