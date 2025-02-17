import { Router } from "express";
import { userSignIn, userSignUp } from "../../controller/v1/userController.js";

export const userRouter: Router = Router();

userRouter.post("/signin", userSignIn);

userRouter.post("/signup", userSignUp);
