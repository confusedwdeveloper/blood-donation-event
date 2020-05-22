const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const config = require("config");

const router = express.Router();

// @route   POST /api/users/login
// @desc    Login and send jwt
// @access  Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists({ checkFalsy: true }),
  ],
  async (req, res) => {
    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      //check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status().json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //since its correct user, return jwt
      const payload = {
        user: {
          id: user.id,
        },
      };
      const secret = config.get("jwtSecret");
      jwt.sign(payload, secret, { expiresIn: "30d" }, (err, token) => {
        if (err) {
          throw err;
        }
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;
