import ProductModel from "./product.model.js"

export default class ProductController {

    getAllProducts(req, res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        const { name , price , sizes} = req.body;
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
            res.status(200).send(product);
        }else{
            res.status(404).send("Product not found");
        }
    }

    // localhost:3000/api/products/filter?minPrice=20&maxPrice=30&category=cloths

    filterProduct(req, res){ // jese req params hota h vese hi req query hota h jo as a query data deta h
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;

        console.log("req query", req.query);
        const result = ProductModel.filter(minPrice, maxPrice, category);
        res.status(200).send(result);
    }

    rateProduct(req, res){
        let error = ProductModel.rating(req.query);
        if(error){
            return res.status(400).send(error);
        }else {
            return res.status(200).send("Rated")
        }
    }

}