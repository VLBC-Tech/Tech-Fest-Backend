const express = require("express");
const { getEvent, approveEntry } = require("../controller/eventController");

const router = express.Router();

router.route("/:id").get(getEvent).patch(approveEntry);

module.exports = router;
