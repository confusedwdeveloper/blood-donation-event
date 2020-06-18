const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const verifyToken = require("../../middlewares/verifyToken");

const router = express.Router();

// @route   POST /api/profile/edit
// @desc    Edit profile
// @access  Private
router.post(
  "/edit",
  [
    verifyToken,
    [
      check("firstName", "Please enter your first name").trim().notEmpty(),
      check("lastName", "Please enter your last name").trim().notEmpty(),
      check("age", "Age must be between 10 and 100")
        .optional()
        .isInt({ min: 10, max: 100 }),
      check("gender", "Please specify your gender")
        .optional()
        .trim()
        .isLength({ min: 4 }),
      check("location", "Please add a valid location")
        .optional()
        .trim()
        .isLength({ min: 2 }),
    ],
  ],
  async (req, res) => {
    // validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // extract data from req body
    const { firstName, lastName, age, gender, location } = req.body;
    try {
      // get current user. we need it now because we need to make sure that name hasn't changed
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(403).json({
          errors: [{ msg: "Not authorized" }],
        });
      }

      // start updating
      if (firstName !== user.firstName) {
        user.firstName = firstName;
      }
      if (lastName !== user.lastName) {
        user.lastName = lastName;
      }
      if (age) {
        user.age = age;
      }
      if (gender) {
        user.gender = gender;
      }
      if (location) {
        user.location = location;
      }
      await user.save();
      return res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
