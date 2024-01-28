import ProductModel from "./product.model.js"

export default class ProductController {

    getAllProducts(req, res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        const { name , price , sizes} = req.body;
        console.log("name received from requst body ", name);
        const newProduct = {
            name: name,
            price : parseFloat(price),
            sizes: sizes.split(','),
            imgUrl : req.file.filename,
        }
        const result = ProductModel.add(newProduct);
        res.status(201).send(result);
    }

    getOneProduct(req, res){
        const id = req.params.id;
        const product = ProductModel.getOne(id);

        if(product){
            res.status(200).send("One Products ");
        }else{
            res.status(404).send("Product not found");
        }
    }

    rateProduct(req, res){
        res.send("Rate Products")}

}