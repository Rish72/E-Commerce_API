//Third Party packages should be on top
import express from "express";
import swagger from "swagger-ui-express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./src/features/products/product.routes.js";
import userRouter from "./src/features/users/user.routes.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";
import cartRouter from "./src/features/carts/items.routes.js";
import apiDocs from "./swagger.json" assert { type: "json" }; // shows error
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
import connectTOMongoDB from "./src/config/mongodb.js";

const PORT = 3000;
const app = express();
app.use(bodyParser.json());


//CORS policy Configuration

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:5500") //we can add * to give access to all clients
// doing this to res because this access will be given by the server not by the client
// return of for preflight request
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Methods", "*") // that can be used to add multiple methods that youwant a specific client to perform like get patch post etc.
//     if(req.method == "OPTIONS") res.sendStatus(200)
//     next();
// })
app.use(cors());

// ek particular pattern ki request ko handle krne k liye.. hum routes bna dete h or ek middleware ki tarah use use kr lete h

// MiddleWares implementation
app.use(loggerMiddleware);
app.use("/api/docs", swagger.serve, swagger.setup(apiDocs));
app.use("/api/products", jwtAuth, router);
app.use("/api/users", userRouter);
app.use("/api/cart", jwtAuth, cartRouter);

app.get("/", (req, res) => {
  res.send("Welcome to REST APIs");
});

app.use((req, res) => {
  return res.status(404).send("API not found ");
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
  connectTOMongoDB();
});
