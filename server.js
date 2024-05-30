const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// In case run on other environment please modify .env
require("dotenv").config();
const port = process.env.PORT;
const mongo = process.env.MONGO_URI;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

mongoose
  .connect(mongo)
  .then(() => {
    console.log("connect to mongoDb");
  })
  .catch((error) => {
    console.log(error);
  });
