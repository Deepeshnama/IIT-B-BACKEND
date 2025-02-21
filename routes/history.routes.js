const express = require("express");
const { autheticateJWT } = require("../middlewares/authMiddleware");
const { getHistory } = require("../controllers/HistoryController");

const router = express.Router();

router.get("/", autheticateJWT, getHistory);

module.exports = router;
