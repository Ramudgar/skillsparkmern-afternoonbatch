const express = require("express");
const { updateProfile } = require("../controllers/profileController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

/**
 * @description To update user profile
 * @api /api/profile/update
 * @access private
 * @type put
 * @return response
 */
router.put("/update", authMiddleware, updateProfile);

module.exports = router;
