const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function verifyToken(req, res, next) {
  // get token
  const token = req.get("x-auth-token");
  if (!token) {
    return res.status(400).json({ msg: "No token, access denied" });
  }

  try {
    // verify token
    const secret = config.get("jwtSecret");
    const payload = jwt.verify(token, secret);
    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
