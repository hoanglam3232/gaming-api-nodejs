const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const gameRoutes = require("./routes/gameRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();

// In case run on other environment please modify .env
dotenv.config();
const port = process.env.PORT;
const mongo = process.env.MONGO_URI;

// to use json type
app.use(express.json());

// routes
app.use("/api/games", gameRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//connect database
mongoose
  .connect(mongo)
  .then(() => {
    console.log("connect to mongoDb");
  })
  .catch((error) => {
    console.log(error);
  });
