import { MongoClient } from "mongodb";

let client;
export const connectTOMongoDB = () => {
  MongoClient.connect(process.env.DB_URL)
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
