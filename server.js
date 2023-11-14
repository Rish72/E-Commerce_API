import  express  from "express";

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to REST APIs")
})


app.listen( PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})