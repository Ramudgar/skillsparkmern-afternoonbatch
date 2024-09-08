
const { createProduct } = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const { authorizeRole } = require("../middlewares/authorizationMiddleware");

/**
 * description: to create a new product
 * method: POST
 * route: /api/products/create
 * access: private
 * return: response message and the created product
 */


router.post("/create", authMiddleware,authorizeRole('admin') , createProduct);

/**
 * description: to search products
 * method: GET
 * route: /api/products/search
 * access: public
 * return: response message and the found products
 */

router.get("/search", searchProducts);

module.exports = router;