import { getDB } from "../../config/mongodb.js";

export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this._id = id;
  }

  static getAll() {
    return users;
  }
}

let users = [
  {
    name: "Seller",
    email: "seller@ecom.com",
    password: "seller12",
    type: "Seller",
    id: 1,
  },
  {
    name: "Customer",
    email: "customer@ecom.com",
    password: "customer1",
    type: "Customer",
    id: 2,
  },
];
