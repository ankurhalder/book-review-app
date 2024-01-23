const config = require("config");
const jwt = require("jsonwebtoken");

// Middleware to authenticate user based on JWT token
exports.authenticateUser = (req, res, next) => {
  // Get the token from the request header
  const token = req.header("x-auth-token");

  // Check if the token is provided
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token not provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Middleware to check if the user is an admin
exports.checkAdminRole = (req, res, next) => {
  // Check if the user has admin role
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Admin role required" });
  }
};
