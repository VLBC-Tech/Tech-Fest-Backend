const express = require("express");
const { protect } = require("../controller/authController");
const { getEvent, approveEntry } = require("../controller/eventController");

const router = express.Router();

router.use(protect);

router.route("/:id").get(getEvent).patch(approveEntry);

module.exports = router;
