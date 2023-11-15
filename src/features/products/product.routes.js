// 1. import express

import express from "express";
import ProductController from "./product.controller.js";

const productController = new ProductController();
const router = express.Router();


// localhost/api/products
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);

// router.get('/addProduct', productController.getOneProduct);
// router.post('/rateProduct', productController.rateProduct);

export default router;