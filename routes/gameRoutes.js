const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");
const authController = require("../controllers/authController");

router.post(
  "/create",
  authController.authMiddleware,
  gameController.createProduct
);
router.get(
  "/getAll",
  authController.authMiddleware,
  gameController.getAllProducts
);
router.get(
  "/:gameId",
  authController.authMiddleware,
  gameController.getProductByGameId
);
router.put(
  "/update/:gameId",
  authController.authMiddleware,
  gameController.updateProduct
);
router.delete(
  "/delete/:gameId",
  authController.authMiddleware,
  gameController.deleteProduct
);

module.exports = router;
