import ItemModel from "./items.model.js";
// productID , userID , quantity

export default class ItemController{

    addToCart(req, res){
        
        const productID = req.body.productID;
        const quantity = req.body.quantity
        const userID = req.userID;  // Attached in jwt authorization it is accessing the token's userID
        ItemModel.add(productID, userID, quantity);
        res.status(201).send("cart is updated");

    }

}