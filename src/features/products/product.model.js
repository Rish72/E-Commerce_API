

export default class ProductModel{
    constructor(id, name, price, desc, imgUrl, category, sizes){
        this.id = id;
        this.name = name ;
        this.price = price ;
        this.desc = desc ;
        this.imgUrl = imgUrl ;
        this.category = category;
        this.sizes = sizes;
    }

    static getOne(id){
        const product = products.find( prod => prod.id == id );
        return product;
    }

    static getAll(){
        return products;
    }

    static add(productObj){
        new ProductModel(
            productObj.id = products.length +1,
        )
        products.push(productObj);
        return productObj;
    }

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