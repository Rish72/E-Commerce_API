import ItemController from "./items.controller.js";
import express from "express";

const itemController = new ItemController();
const cartRouter = express.Router();

cartRouter.post('/', itemController.addToCart);

export default cartRouter;