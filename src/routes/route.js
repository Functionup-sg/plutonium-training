const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController= require("../controllers/productController")

const Middleware = require ("../middlewares/middleware")






router.post("/createProduct", ProductController.createProduct  )
router.post("/createUser", UserController.createUser)
router.post("/createOrder", OrderController.createOrder)





module.exports = router;