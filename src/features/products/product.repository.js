import { getDB } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";

class ProductRepository {
  constructor() {
    this.collection = "products";
  }

  async add(newProduct) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      await collection.insertOne(newProduct);
    } catch (error) {
      console.log("error: " + err);
    }
  }

  async getAll() {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const products = await collection.find().toArray();
      return products;
    } catch (error) {
      console.log("error: " + err);
    }
  }

  async getOne(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const prod = await collection.findOne({ _id: new ObjectId(id) });
      return prod;
    } catch (error) {
      console.log("error: " + err);
    }
  }

  async filter(minPrice, maxPrice, category) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      let filterExp = {};

      if (minPrice) {
        filterExp.price = { $gte: parseFloat(minPrice) }; // filtered price will be greater than or equal to minPRice
      }
      if (maxPrice) {
        filterExp.price = { ...filterExp.price, $lte: parseFloat(maxPrice) }; // filtered price will be smaller than or equal to minPRice
      }
      if (category) {
        filterExp.category = category;
      }
      return await collection.find(filterExp).toArray();
    } catch (error) {
      console.log("error: " + err);
    }
  }

  // async rating(userID, productID, rating) {
  //   try {
  //     const db = getDB();
  //     const collection = db.collection(this.collection);
  //     const product = await collection.findOne({_id : new ObjectId(productID)})
  //     console.log("USER ID: "+new ObjectId(userID));
  //     const userRating = product?.rating?.find( (r) => {
  //       return r.userID == userID;
  //     })
  //     if(userRating){
  //       await collection.updateOne({
  //         _id : new ObjectId(productID), "rating.userID":(userID)
  //       },{
  //         $set : {
  //           "rating.$.rating" : rating
  //         }
  //       })
  //     }else {
  //       await collection.updateOne(
  //         { _id: new ObjectId(productID) },
  //         {
  //           $push: { rating: { rating, userID } },
  //         }
  //       );
  //     }
  //   } catch (error) {
  //     console.log("error: " + err);
  //   }
  // }
  async rating(userID, productID, rating) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);

      // to stop user from performing same task from 2 differenct computer called Racing we can do this
      
      await collection.updateOne({ _id: new ObjectId(productID), }, {
        $pull: { ratings: {userID: new ObjectId(userID)}}
      })

      await collection.updateOne({_id : new ObjectId(productID)}, {$push : {ratings: {userID : new ObjectId}, rating}})
     
    } catch (error) {
      console.log("error: " + err);
    }
  }
}

export default ProductRepository;
