import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import UserRepository from "./user.repository.js";
export default class UserController {

  constructor(){
    this.userRepository = new UserRepository();
  }

  //? Implementing JWT tokens

  async signIn(req, res) {
    const data = req.body;
      try{
        if (data) {
          const user = await this.userRepository.SignIn(data);
          console.log(user);
          if (!user) {
            res.status(400).send("Invalid Credentials");
            
          } else {// 1 to Create a Token
            //never store sensitive info in payload only store data like UserID, and what all resources user is authorized to access
            // the secret key is created or us key ko user ko assign kiya jata h taki use verify kara jaa sake
            const token = jwt.sign(
              {
                userID: user.id,
                email: user.email,
              },
              "y4dBnKTsZb",
              {
                expiresIn: "2 days",
              }
            );
            // 2 send the token to user
            return res.status(200).send(token);
          }  
        } 
      }
      catch(err){
        console.log(err);
      }
  }

  async signUp(req, res) {
    const data = req.body;
    if (data) {
      try {
        const { name, email, password, type } = data;

        const newUser = new UserModel(name, email, password, type);
        await this.userRepository.SignUp(newUser)
        res.status(201).send(newUser);
      } catch (err) {
        console.log(err);
        res.status(400).send("Invaild");
      }
    }
  }
}
