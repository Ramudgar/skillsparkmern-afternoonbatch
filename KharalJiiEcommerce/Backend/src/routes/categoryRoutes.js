const express = require("express");
const { createCategory } = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/authMiddleware");
const { authorizeRole } = require("../middlewares/authorizationMiddleware");
const router = express.Router();

/**
 * description: to create a new category
 * route: POST /api/category
 * access: Private (only admin can create a category)
 * type: POST
 * return:response message
 */
router.post("/",authMiddleware,authorizeRole('admin'), createCategory);

module.exports = router;