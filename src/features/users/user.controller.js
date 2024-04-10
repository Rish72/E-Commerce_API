import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";
export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  //? Implementing JWT tokens

  async signIn(req, res) {
    const data = req.body;
    try {
      //1. find user by email
      const user = await this.userRepository.findByEmail(data.email);
      if (!user) {
        return res.status(400).send("Invalid Credentials");
      } else {
        //2. compare password with hashed password
        const result = await bcrypt.compare(data.password, user.password);
        if (result) {
          // 1 to Create a Token
          //never store sensitive info in payload only store data like UserID, and what all resources user is authorized to access
          // the secret key is created or us key ko user ko assign kiya jata h taki use verify kara jaa sake
          const token = jwt.sign(
            {
              userID: user._id,
              email: user.email,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "2 days",
            }
          );
          // 2 send the token to user
          return res.status(200).send(token);
        } else {
          return res.status(400).send("Invalid Credentials");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  async signUp(req, res) {
    const data = req.body;
    if (data) {
      try {
        const { name, email, password, type } = data;

        //1. Hashing of the password
        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new UserModel(name, email, hashedPassword, type);
        await this.userRepository.SignUp(newUser);
        res.status(201).send({ name, email });
      } catch (err) {
        console.log(err);
        res.status(400).send("Invaild");
      }
    }
  }
}
