import  express  from "express";
import bodyParser from "body-parser";
import router from "./src/features/products/product.routes.js";
import userRouter from "./src/features/users/user.routes.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

// ek particular pattern ki request ko handle krne k liye.. hum routes bna dete h or ek middleware ki tarah use use kr lete h
app.use("/api/products", jwtAuth ,router)
app.use("/api/users", userRouter);

app.get('/', (req, res) => {
    res.send("Welcome to REST APIs")
})


app.listen( PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})