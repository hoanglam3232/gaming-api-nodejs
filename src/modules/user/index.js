const express = require("express");
const userController = require("./user.controller");
const { authMiddleware } = require("../../middlewares");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/me", authMiddleware, userController.getProfile);

module.exports = router;
