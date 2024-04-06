import { getDB } from "../../config/mongodb.js";

class UserRepository {
  async SignUp(data) {
    try {
      //1. get access to the specific db
      const db = getDB();
      //2. get the collection
      const collection = db.collection("users");
      await collection.insertOne(data); //returns a promise of result of this operation

      return data;
    } catch (error) {
      console.log("Something went wrong : ", error);
    }
  }

  async SignIn(data) {
    try {
      //1. get access to the specific db
      const db = getDB();
      //2. get the collection
      const collection = db.collection("users");
      const { email, password } = data;
      return await collection.findOne({ email, password }); //returns a promise of result of this operation
    } catch (error) {
      console.log("Something went wrong : ", error);
    }
  }

  async findByEmail(email) {
    try {
      //1. get access to the specific db
      const db = getDB();
      //2. get the collection
      const collection = db.collection("users");
      // const { email, password } = data;
      return await collection.findOne({ email }); //returns a promise of result of this operation
    } catch (error) {
      console.log("Something went wrong : ", error);
    }
  }
}

export default UserRepository;
