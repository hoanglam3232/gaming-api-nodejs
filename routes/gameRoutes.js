const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.post("/create", gameController.createProduct);
router.get("/getAll", gameController.getAllProducts);
router.get("/:gameId", gameController.getProductByGameId);
router.put("/update/:gameId", gameController.updateProduct);
router.delete("/delete/:gameId", gameController.deleteProduct);

module.exports = router;
