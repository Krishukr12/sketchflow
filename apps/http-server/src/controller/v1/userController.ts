import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";
import { createError } from "../../utils/createError.js";
import { StatusCodes } from "http-status-codes";
import { prismaClient } from "@repo/db/client";

export const userSignIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // data will come correct here because of middleware
  // check in db , about email and match the pass , if both are okey
  // generate jwt token and return it
  // return unauthorized
  const { email, password } = req.body;
  try {
    const user = await prismaClient.user.findFirst({
      where: { email },
    });

    if (!user) {
      next(createError(StatusCodes.UNAUTHORIZED, "invalid email"));
      return;
    }
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      next(createError(StatusCodes.UNAUTHORIZED, "invalid password"));
    }

    const token = jwt.sign(
      { userId: user.userId, email: user.email },
      "dsfasdfasdfasdkfasdf",
      { expiresIn: "1h" }
    );

    res.status(StatusCodes.OK).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    next(createError(StatusCodes.BAD_REQUEST, "internal server error"));
  }
};

export const userSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const response = await prismaClient.user.create(req.body);
    console.log("response", response);
    res.status(StatusCodes.CREATED).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(
      createError(StatusCodes.INTERNAL_SERVER_ERROR, "internal server error")
    );
  }
};
