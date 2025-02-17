import { NextFunction, Request, Response } from "express";

import { createError } from "../../utils/createError.js";
import { StatusCodes } from "http-status-codes";
import { userLoginSchema } from "@repo/zod-schema/user";
import { ZodError } from "@repo/zod-schema/z";
import { prismaClient } from "@repo/db/client";

export const userSignIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // validate with zod
  // check if user already exit , and email phoneNumber should be unique

  const isDataValid = userLoginSchema.safeParse(req.body);
  if (!isDataValid.success) {
    res.send(StatusCodes.BAD_GATEWAY).json({
      status: false,
      error: isDataValid.error,
    });
  }

  res.send("working fine");

  try {
    const { userId } = req.body;
    const response = await prismaClient.user.findFirst({ where: userId });
    console.log(userId);
  } catch (error) {
    if (error instanceof ZodError) {
      next(createError(StatusCodes.BAD_GATEWAY, "internal server error"));
    }
  }
};

export const userSignUp = (req: Request, res: Response, next: NextFunction) => {
  res.send("working fine");
};
