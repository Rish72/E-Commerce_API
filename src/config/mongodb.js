import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/ecomDB";
const connectTOMongoDB = () => MongoClient
  .connect(url)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

export default connectTOMongoDB;
