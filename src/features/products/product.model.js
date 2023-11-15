

export default class ProductModel{
    constructor(_id, _name, _price, _desc, _imgUrl, _category, _size){
        this.id = _id;
        this.name = _name ;
        this.price = _price ;
        this.desc = _desc ;
        this.imgUrl = _imgUrl ;
        this.category = _category;
        this.size = _size;
    }

    static getAll(){
        return products;
    }
}

var products = [
    new ProductModel(
        1, 
        "Iphone",
        "4520000", 
        "A mobile phone", 
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693248280978", 
        "Category1"
    ),
    new ProductModel(
        2, 
        "Hoodies", 
        "2500", "An anime Hoodies", 
        "https://images-na.ssl-images-amazon.com/images/I/51FtXmlPxpL.jpg", 
        "Category1",
        ["XS", "S", "M", "L", "XL"]
    ),
    new ProductModel(
        3, 
        "Collections", 
        "20000", 
        "Collection oF Clothes", 
        "https://www.popsci.com/uploads/2022/03/02/aviv-rachmadian-7F7kEHj72MQ-unsplash-scaled.jpg?auto=webp", 
        "Category1",
        ["M", "L", "XL"]
    ),
]