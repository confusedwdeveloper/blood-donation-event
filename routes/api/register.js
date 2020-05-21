const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const config = require("config");

const router = express.Router();

// @route   GET /api/register
// @desc    Register new user
// @access  Public
router.post(
  "/",
  [
    check("firstName", "Please enter your first name").trim().notEmpty(),
    check("lastName", "Please enter your last name").trim().notEmpty(),
    check("email", "Please include a valid email").normalizeEmail().isEmail(),
    check(
      "password",
      "Please include a password with 7 or more characters"
    ).isLength({ min: 7 }),
  ],
  async (req, res) => {
    // validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      // check if user already exists
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // Now that we know user doesn't exist, we can proceed forward

      // encrypt password
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      // generate initial
      const initial =
        firstName.trim()[0].toUpperCase() + lastName.trim()[0].toUpperCase();

      // prepare document and then save to db
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        initial,
      });

      await newUser.save();

      //generate and return jwt
      const payload = {
        user: {
          id: newUser.id,
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
      res.status(500).json({ msg: "Server error" });
    }
  }
);

module.exports = router;
