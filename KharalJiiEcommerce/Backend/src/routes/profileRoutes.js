const express = require("express");
const { updateProfile, getProfile } = require("../controllers/profileController");
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

/**
 * @description To  user get profile
 * @api /api/profile/get
 * @access private
 * @type get
 * @return response
 */

router.get("/get", authMiddleware, getProfile);

module.exports = router;
