// 1. import express

import express from "express";
import ProductController from "./product.controller.js";
import upload from "../../middlewares/fileUpload.middleware.js";
const productController = new ProductController();
const router = express.Router();


// localhost/api/products
router.get('/all', (req, res) => {
    productController.getAllProducts(req, res)
});
router.post('/', upload.single('imgUrl'),(req, res) => {
    productController.addProduct(req, res)
}); // upload.array can also be added for multiple file uploads

router.get('/filter', (req, res) => {
    productController.filterProduct(req, res);
});
router.get('/:id', (req, res) => {
    productController.getOneProduct(req, res)
});
router.post('/rateProduct', (req, res) => {
    productController.rateProduct(req, res);
});

export default router;