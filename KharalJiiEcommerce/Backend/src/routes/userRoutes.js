
const express = require("express");
const { userRegister } = require("../controllers/userController");
const router = express.Router();
// routes for user registrations

router.post('/register', userRegister);

module.exports = router;