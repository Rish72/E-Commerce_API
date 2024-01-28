// 1. import express

import express from "express";
import ProductController from "./product.controller.js";
import upload from "../../middlewares/fileUpload.middleware.js";
const productController = new ProductController();
const router = express.Router();


// localhost/api/products
router.get('/all', productController.getAllProducts);
router.post('/', upload.single('imgUrl'), productController.addProduct); // upload.array can also be added for multiple file uploads

router.get('/:id', productController.getOneProduct);
router.post('/rateProduct', productController.rateProduct);

export default router;