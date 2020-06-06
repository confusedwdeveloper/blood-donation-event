const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Donor = require("../../models/Donor");
const verifyToken = require("../../middlewares/verifyToken");

const router = express.Router();

// @route   POST /api/event
// @desc    Sign up for event
// @access  Private
router.post(
  "/",
  [
    verifyToken,
    [
      check("bloodType", "Please select your blood type").notEmpty(),
      check("msg")
        .trim()
        .notEmpty()
        .withMessage("Please include your message")
        .isLength({ min: 8 })
        .withMessage("Your message is too short"),
    ],
  ],
  async (req, res) => {
    //error handling

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructure
    const { msg, bloodType } = req.body;

    try {
      // see if already donor
      const user = await User.findById(req.user.id).select("-password");

      if (!user) {
        return res.status(403).json({
          errors: [{ msg: "Not authorized" }],
        });
      }

      if (user.isRegistered) {
        return res.status(400).json({
          errors: [{ msg: "Your have already signed up before" }],
        });
      }

      //create new donor doc
      const newDonor = new Donor({
        user: req.user.id,
        bloodType,
        msg,
      });

      await newDonor.save();

      // update user Doc
      user.isRegistered = true;
      user.registeredDate = Date.now();
      await user.save();

      // send user for now. I will consider later if it needs to be changed
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
  }
);

module.exports = router;
