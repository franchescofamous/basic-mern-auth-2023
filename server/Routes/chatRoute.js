const express = require("express");
const chatCtrl = require("../Controllers/chatController");
const verifyJwt = require("../middleware/verifyJwt");
const router = express.Router();

router.get("/select", verifyJwt, chatCtrl.getAllChat);

module.exports = router;
