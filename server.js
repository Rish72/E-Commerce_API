import  express  from "express";
import router from "./src/features/products/product.routes.js";
import bodyParser from "body-parser";

const PORT = 3200;
const app = express();
app.use(bodyParser.json());

// ek particular pattern ki request ko handle krne k liye.. hum routes bna dete h or ek middleware ki tarah use use kr lete h
app.use("/api/products", router)

app.get('/', (req, res) => {
    res.send("Welcome to REST APIs")
})


app.listen( PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})