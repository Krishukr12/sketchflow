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
      token,
      data: {
        email: user.email,
        fullName: user.fullName,
        phoneNumber: user.phoneNumber,
      },
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
    const { password, email, phoneNumber, fullName } = req.body;

    const isUserAlreadyExist = await prismaClient.user.findFirst({
      where: { OR: [{ email }, { phoneNumber }] },
    });

    if (isUserAlreadyExist) {
      next(createError(StatusCodes.CONFLICT, "user already exist"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await prismaClient.user.create({
      data: { email, phoneNumber, fullName, password: hashedPassword },
      select: {
        fullName: true,
        email: true,
        phoneNumber: true,
      },
    });

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "user signup successfully",
      data: response,
    });
  } catch (error) {
    next(
      createError(StatusCodes.INTERNAL_SERVER_ERROR, "internal server error")
    );
  }
};
