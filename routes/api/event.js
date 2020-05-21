const express = require("express");

const router = express.Router();

// @route   GET /api/event
// @desc    test
// @access  Public
router.get("/", (req, res) => {
  res.send("Event route");
});

module.exports = router;
