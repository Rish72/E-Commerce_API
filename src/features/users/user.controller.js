import UserModel from "./user.model.js"
import jwt from "jsonwebtoken";

export default class UserController{
    //? Implementing JWT tokens 

    signIn(req, res){

        const data = req.body;
        if(data){
            const user = UserModel.SignIn(data);
            console.log(user);
            if(user){
                
                // 1 to Create a Token
                //never store sensitive info in payload only store data like UserID, and what all resources user is authorized to access
                // the secret key is created or us key ko user ko assign kiya jata h taki use verify kara jaa sake 
                const token = jwt.sign( 
                        {
                            userID: user.id, 
                            email : user.email
                        }, 
                            '0$8M^6eAiLhtxat', 
                        {
                            expiresIn: "2 days"
                        }
                    )

               return res.status(200).send(token);
            }else{
                res.status(400).send("Invalid Credentials");
            }
        } else {
            res.status(400).send("Invalid Credentials");
        }
    }


    signUp(req, res){
        const data = req.body;
       if(data){
        const newUser = UserModel.SignUp(data);
        res.status(201).send(newUser);
       }else {
        res.status(400).send("Invaild");
       }
    }
}