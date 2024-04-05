import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/ecomDB";
let client;
export const connectTOMongoDB = () => {
  MongoClient.connect(url)
    .then((instance) => {
      client = instance;
      console.log("Connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const getDB = () => {
  return client.db();
};
