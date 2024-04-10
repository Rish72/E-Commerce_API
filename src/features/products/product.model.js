import UserModel from "../users/user.model.js";

export default class ProductModel{
    constructor( name, price, desc, imgUrl, category, sizes,id){
        this.name = name ;
        this.price = price ;
        this.desc = desc ;
        this.imgUrl = imgUrl ;
        this.category = category;
        this.sizes = sizes;
        this._id = id;
    }

    // static getOne(id){
    //     const product = products.find( prod => prod.id == id );
    //     return product;
    // }

    // static getAll(){
    //     return products;
    // }

    // static add(productObj){
        //1.get the db
        //2. get the collection
    //     new ProductModel(
    //         productObj.id = products.length +1,
    //     )
    //     products.push(productObj);
    //     return productObj;
    // }

    static filter(minPrice , maxPrice, category){
        const result = products.filter( (prod) => {
            return (
                (!minPrice || prod.price >= minPrice) &&
                (!maxPrice || prod.price <= maxPrice) && 
                (!category || prod.category == category)
                );
        })
        return result;
    }

    static rating(data){
        const {userID, productID, rating} = data;
        // 1 CHECK THE USER
        const user = UserModel.getAll().find( user => user.id == userID);
        if(!user){
            return "User not found";
        }
        // 2 CHECK THE PRODUCT
       const prod = products.find( prod => prod.id == productID);
        if(!prod){
            return "Product is not found"
        } 
        // 3 CHECK FOR THE RATING IF EXISTS OR NOT
        if(!prod.rating){
            prod.rating = [];
            console.log("Rating property should be add3d "+prod.rating);
            prod.rating.push({userID: userID, rating: rating});
        }else{
            const ratedProductInd = prod.rating.findIndex( rt => rt.userID === userID );
            if(ratedProductInd >= 0){
                prod.rating[ratedProductInd] = {userID: userID, rating: rating};
            }else {
                prod.rating.push( {userID: userID, rating: rating} );
            }
        }

    }
}

var products = [
    new ProductModel(
        1, 
        "Iphone",
        10, 
        "A mobile phone", 
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693248280978", 
        "Category1"
    ),
    new ProductModel(
        2, 
        "Hoodies", 
        20, "An anime Hoodies", 
        "https://images-na.ssl-images-amazon.com/images/I/51FtXmlPxpL.jpg", 
        "Category1",
        ["XS", "S", "M", "L", "XL"]
    ),
    new ProductModel(
        3, 
        "Collections", 
        30, 
        "Collection oF Clothes", 
        "https://www.popsci.com/uploads/2022/03/02/aviv-rachmadian-7F7kEHj72MQ-unsplash-scaled.jpg?auto=webp", 
        "Category1",
        ["M", "L", "XL"]
    ),
    new ProductModel(
        4, 
        "Collections", 
        20, 
        "Collection oF Clothes", 
        "https://www.popsci.com/uploads/2022/03/02/aviv-rachmadian-7F7kEHj72MQ-unsplash-scaled.jpg?auto=webp", 
        "Category2",
        ["M", "L", "XL"]
    ),
]