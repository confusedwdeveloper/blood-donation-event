const express = require("express");
const Contact = require("../../models/Contact");
const { check, validationResult } = require("express-validator");

const router = express.Router();

// @route   POST /api/contact
// @desc    Contact form handling
// @access  Public
router.post(
  "/",
  [
    check("firstName", "Please enter your first name").trim().notEmpty(),
    check("lastName", "Please enter your last name").trim().notEmpty(),
    check("email", "Please include a valid email").isEmail().normalizeEmail(),
    check("message")
      .trim()
      .notEmpty()
      .withMessage("Please include your message")
      .isLength({ min: 10 })
      .withMessage("Your message is too short"),
  ],
  async (req, res) => {
    //error handling

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, message } = req.body;

    try {
      // check if same email has already sent a message before
      const msg = await Contact.findOne({ email });

      if (msg && !msg.repliedTo) {
        return res.status(400).json({
          errors: [
            {
              msg:
                "Please wait for the reply to the previous message before sending another one",
            },
          ],
        });
      }
      // now save post

      const post = new Contact({
        firstName,
        lastName,
        email,
        message,
      });

      await post.save();

      return res
        .status(200)
        .json({ msg: "Your message has been successfully submitted" });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
  }
);

module.exports = router;
