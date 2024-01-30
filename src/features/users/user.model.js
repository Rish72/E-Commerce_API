
export default class UserModel{
    constructor(id, name, email, password, type){ //!type is not added yet and to be added
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }


    static SignIn(email, password){
        const user = users.find( (user) => user.email === email && user.password === password);
        console.log("user in model");
        return user;
    }

    static SignUp(name, email, password, type){
        const newUser = new UserModel(users.length+1, name, email, password, type)
        return newUser;
    }
}

var users = [
    {
        id : 1, 
        name : "Seller",
        email : "seller@ecom.com",
        password : "seller12",
        type : "Seller"
    }
]