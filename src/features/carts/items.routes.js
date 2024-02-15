import ItemController from "./items.controller.js";
import express from "express";

const itemController = new ItemController();
const cartRouter = express.Router();

cartRouter.post('/', itemController.addToCart);
cartRouter.get('/', itemController.showItems);
cartRouter.delete('/:id',itemController.deleteCartItem);

export default cartRouter;