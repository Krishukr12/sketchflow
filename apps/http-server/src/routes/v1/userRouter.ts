import { Router } from "express";
import { userSignIn, userSignUp } from "../../controller/v1/userController.js";
import { validateDataWithZod } from "../../utils/validateWithZod.js";
import { userLoginSchema, userSignUpSchema } from "@repo/zod-schema/user";

export const userRouter: Router = Router();

userRouter.post("/signin", validateDataWithZod(userLoginSchema), userSignIn);

userRouter.post("/signup", validateDataWithZod(userSignUpSchema), userSignUp);
