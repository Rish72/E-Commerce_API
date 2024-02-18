//Third Party packages should be on top 
import  express  from "express";
import swagger from "swagger-ui-express";

import bodyParser from "body-parser";
import router from "./src/features/products/product.routes.js";
import userRouter from "./src/features/users/user.routes.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";
import cartRouter from "./src/features/carts/items.routes.js";
import apiDocs from "./swagger.json" assert {type: "json"};

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

// ek particular pattern ki request ko handle krne k liye.. hum routes bna dete h or ek middleware ki tarah use use kr lete h

// MiddleWares implementation
app.use("/api/docs", swagger.serve, swagger.setup(apiDocs));
app.use("/api/products", jwtAuth ,router)
app.use("/api/users", userRouter);
app.use("/api/cart", jwtAuth,cartRouter);

app.get('/', (req, res) => {
    res.send("Welcome to REST APIs")
})


app.listen( PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})