// productID userID quantity

import ProductModel from "../products/product.model.js";
import UserModel from "../users/user.model.js";

export default class ItemModel{

    constructor(productID, userID, quantity, id){
        this.id = id;
        this.productID = productID;
        this.userID = userID;
        this.quantity = quantity
    }

    static add(productID, userID, quantity){
        const user = UserModel.getAll().find(user => user.id == userID);
        if(!user){
            return "User not Found"
        }
        const product = ProductModel.getAll().find(user => user.id == userID);
        if(!product){
            return "Product not Found"
        }
        const carItem = new ItemModel(productID, userID, quantity)
        carItem.id = cartItems.length + 1;
        cartItems.push(carItem);
        return cartItems;
        
    }

    // 1. Check userID is valid or not ✅
    // 2. Check Product is valid or not ✅
    // 3. Update the cart Items
    // 4. if user again adds the same cart then, the cart should be replaced the existing item
    
    static get(userID){
        const user = UserModel.getAll().find(user => user.id == userID);
        if(user){
            const items = cartItems.filter( id => id.userID == userID)
            return items;
        }else {
            return "User Not Found";
        }
    }

}

let cartItems = [
    new ItemModel(1, 1, 5, 1),
    new ItemModel(1, 2, 15, 2)
]