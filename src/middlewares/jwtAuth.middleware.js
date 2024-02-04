import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {

    const token  = req.headers["authorization"];
    if(!token){
        res.status(400).send("Unauthorized Token, ACCESS DENIED");
    }
    try {
        const payload = jwt.verify(token, 'y4dBnKTsZb');
        // console.log("payload "+ payload);
    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }

    next();
}

export default jwtAuth;