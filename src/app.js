const express = require("express");
const { errorHandler, responseWrapper } = require("./middlewares");
const userRoutes = require("./modules/user");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Error Handling
app.use(responseWrapper);
app.use(errorHandler);

module.exports = app;
