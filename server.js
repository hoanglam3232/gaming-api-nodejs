const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Game = require("./models/gameModel");
const app = express();

// In case run on other environment please modify .env
require("dotenv").config();
const port = process.env.PORT;
const mongo = process.env.MONGO_URI;

app.use(bodyParser.json());
// to use json type
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// create a product
app.post("/create", async (req, res) => {
  try {
    const product = await Game.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// get all product
app.get("/getAll", async (req, res) => {
  try {
    const product = await Game.find({});
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// update a product
app.put("/update/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const product = await Game.findOneAndUpdate({ gameId: gameId }, req.body, {
      new: true,
    });

    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find product with gameId ${gameId}` });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// delete a product
app.delete("/delete/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const product = await Game.findOneAndDelete({ gameId: gameId });

    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find product with gameId ${gameId}` });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(mongo)
  .then(() => {
    console.log("connect to mongoDb");
  })
  .catch((error) => {
    console.log(error);
  });
