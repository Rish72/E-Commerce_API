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
    showItems(req, res){
        const userID = req.userID; // this is because user can pass any id but with this if will get only the logged in user's data

        const items = ItemModel.get(userID);
        res.status(200).send(items)
    }

}