const express = require("express");

const router = express.Router();

// @route   GET /api/users
// @desc    test
// @access  Public
router.get("/", (req, res) => {
  res.send("Users route");
});

module.exports = router;