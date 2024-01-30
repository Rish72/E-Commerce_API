import UserModel from "./user.model.js"

export default class UserController{

    signIn(req, res){
        const email = req.body.email;
        const password = req.body.password;
        const user = UserModel.SignIn(email, password);
        console.log("user in controller");
        console.log(user);
        if(user){
            res.status(200).send("Login successful");
        }else{
            res.status(400).send("Invalid Credentials");
        }
    }

    signUp(req, res){
        const {name, email, password, type} = req.body;
        const newUser = UserModel.SignUp(name, email, password, type);
        res.status(201).send(newUser);
    }
}