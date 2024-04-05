import UserController from "./user.controller.js";
import express from "express";

const userController = new UserController();
const userRouter = express.Router();

userRouter.post("/signUp", (req, res) => {
    userController.signUp(req,res);
}) ;
userRouter.post("/signIn", (req,res) => {
    userController.signIn(req, res);
});

export default userRouter;