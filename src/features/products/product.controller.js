import ProductModel from "./product.model.js";
import ProductRepository from "./product.repository.js";
import { ObjectId } from "mongodb";

export default class ProductController {
  constructor() {
    this.productRepo = new ProductRepository();
  }

  async getAllProducts(req, res) {
    try {
      const products = await this.productRepo.getAll();
      res.status(200).send(products);
    } catch (error) {
      console.log(error);
      res.status(400).send("Something went wrong");
    }
  }

  async addProduct(req, res) {
    try {
      const { name, price, desc, category, sizes } = req.body;
      const newProduct = new ProductModel(
        name,
        parseFloat(price),
        desc,
        req.file.filename,
        category,
        sizes.split(",")
      );

      const result = await this.productRepo.add(newProduct);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send("Something went wrong");
    }
  }

  async getOneProduct(req, res) {
    const id = req.params.id;
    try {
      const product = await this.productRepo.getOne(new ObjectId(id));
      if (!product) res.status(400).send("Product not found");
      else res.status(200).send(product);
    } catch (error) {
      console.log(error);
      res.status(400).send("Something went wrong");
    }
  }

  // localhost:3000/api/products/filter?minPrice=20&maxPrice=30&category=cloths

  async filterProduct(req, res) {
    // jese req params hota h vese hi req query hota h jo as a query data deta h
    try {
      const minPrice = req.query.minPrice;
      const maxPrice = req.query.maxPrice;
      const category = req.query.category;

      console.log("req query", req.query);
      const result = await this.productRepo.filter(
        minPrice,
        maxPrice,
        category
      );
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send("Something went wrong");
    }
  }

  async rateProduct(req, res) {
    try {
      const userID = req.userID;
      const {productID, rating } = req.query;
      await this.productRepo.rating(new ObjectId(userID), new ObjectId(productID), rating);
      return res.status(200).send("Rated");
      
    } catch (error) {
      console.log(error);
    }
  }
}
