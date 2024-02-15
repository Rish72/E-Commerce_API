
export default class UserModel{
    constructor(id, name, email, password, type){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }


    static SignIn(data){
        const {email, password} = data;
        const user = users.find( (user) => user.email === email && user.password === password); // Short circuiting
        return user;
    }

    static SignUp(data){
        const {name, email, password, type} = data;
        const newUser = new UserModel(users.length+1, name, email, password, type)
        return newUser;
    }
    
    static getAll(){
        return users;
    }
}

let users = [
    {
        id : 1, 
        name : "Seller",
        email : "seller@ecom.com",
        password : "seller12",
        type : "Seller"
    },
    {
        id: 2, 
        "name" : "Customer",
        "email" : "customer@ecom.com",
        "password" : "customer1",
        type : "Customer"
    }
]