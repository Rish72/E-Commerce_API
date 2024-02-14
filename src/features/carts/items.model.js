// productID userID quantity

export default class ItemModel{

    constructor(productID, userID, quantity, id){
        this.id = id;
        this.productID = productID;
        this.userID = userID;
        this.quantity = quantity
    }

    static add(productID, userID, quantity){
        
        const carItem = new ItemModel(productID, userID, quantity)
        carItem.id = cartItems.length + 1;
        cartItems.push(carItem);
        return cartItems;
        
    }

}

let cartItems = [
    new ItemModel(1, 2, 5, 1)
]