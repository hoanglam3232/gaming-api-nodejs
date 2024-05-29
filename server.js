const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

// In case run on other environment please uncomment this line
// require('dotenv').config();
// const port = process.env.PORT
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
