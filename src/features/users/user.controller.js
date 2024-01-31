import UserModel from "./user.model.js"

export default class UserController{

    signIn(req, res){
        const email = req.body.email;
        const password = req.body.password;
        const user = UserModel.SignIn(email, password);
        console.log(user);
        if(user){
            res.status(200).send("Login successful");
        }else{
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