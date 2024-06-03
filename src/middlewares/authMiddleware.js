const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../configs");

const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");
  // check user login or not
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
