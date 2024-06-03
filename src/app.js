const express = require("express");
const helmet = require("helmet");
const rateLimiter = require("./middlewares/rateLimiter");
const { errorHandler, responseWrapper } = require("./middlewares");
const userRoutes = require("./modules/user");
const app = express();

// Middleware
app.use(express.json());
// Helmet helps secure your Express apps by setting various HTTP
app.use(helmet());
// Rate limiting helps to prevent brute-force attacks
app.use(rateLimiter);

// Routes
app.use("/api/users", userRoutes);

// Error Handling
app.use(responseWrapper);
// Custom Error Handling Middleware for Production. Modify env in NODE_ENV for production
if (app.get("env") === "production") {
  app.use((err, req, res, next) => {
    res.status(500).send("Server Error");
  });
} else {
  // Development Error Handler (includes stack trace)
  app.use(errorHandler);
}

module.exports = app;
