import UserController from "./user.controller.js";
import express from "express";

const userController = new UserController();
const userRouter = express.Router();

userRouter.post("/signUp", userController.signUp);
userRouter.post("/signIn", userController.signIn);

export default userRouter;