import ProductModel from "./product.model.js"

export default class ProductController {

    getAllProducts(req, res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        console.log(req.body);
        console.log("this is post request");
        res.status(200).send("Product added");
    }

    getOneProduct(req, res){res.send("One Products")}

    rateProduct(req, res){res.send("Rate Products")}
}