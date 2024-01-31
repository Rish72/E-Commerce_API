import UserModel from "../features/users/user.model.js";

// basic authrization will check for correct credentials
const basicAuthorizer = (req, res, next) => {

    // 1 check kro jo bhi credentials aa rhe h headers ki vo emplty h ya nhi

    const authHeader = req.headers["authorization"]  // array hoti h kuki hum isme kaffi headers send kr sakte h agar authHeader empty hota h to unauthorized access h
    if(!authHeader){
        res.status(401).send("Unauthorized access");
    }else{
        console.log(authHeader);
        // agar h to hume extract krna pdega data ko 
        // jo bhi client credentials server ko bhejega jo base64 encoding format me hoga 

        // 2 Extract the data       authHeader = [Basic //* qwerty2345asdfklj]; is required
        const base64Credentials = authHeader.replace('Basic ','');
        console.log(base64Credentials);


        // 3 Decoding the received Credentials of base64
        const decodedCreds = Buffer.from(base64Credentials, 'base64').toString('utf8');
        console.log(decodedCreds); //[username : password]
        const finalCreds = decodedCreds.split(':'); // ye ek array h jo 2 cheez convert karti h email and password  
        console.log(finalCreds);


        const user = UserModel.getAll().find( user => user.email == finalCreds[0] && user.password == finalCreds[1]);
        if(user){
            next();
        }else {
            res.status(400).send("Invalid");
        }
    }
}

export default basicAuthorizer;