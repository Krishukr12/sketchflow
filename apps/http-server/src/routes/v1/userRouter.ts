import { Request, Response, Router } from "express";
import { userSignIn, userSignUp } from "../../controller/v1/userController.js";
import { validateDataWithZod } from "../../utils/validateWithZod.js";
import { userLoginSchema, userSignUpSchema } from "@repo/zod-schema/user";
import { isUserAuthenticated } from "../../middleware/isUserAuthenticated.js";

export const userRouter: Router = Router();

userRouter.post("/signin", validateDataWithZod(userLoginSchema), userSignIn);

userRouter.post("/signup", validateDataWithZod(userSignUpSchema), userSignUp);

userRouter.get(
  "/getdata",
  isUserAuthenticated,
  (req: Request, res: Response) => {
    //@ts-ignore
    res.send("authenticated");
  }
);
