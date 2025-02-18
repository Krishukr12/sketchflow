import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { createError } from "../utils/createError.js";
import { StatusCodes } from "http-status-codes";

export const isUserAuthenticated = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authToken = req.headers["authorization"];

    if (!authToken) {
      next(createError(StatusCodes.UNAUTHORIZED, "Unauthorized"));
      return;
    }

    const token = authToken.startsWith("Bearer ")
      ? authToken.slice(7)
      : authToken;
    const decodedToken = jwt.verify(token, "sdfasdfasfdfad");
    (req as any).user = decodedToken;
    console.log(decodedToken);
    //@ts-ignore
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    next(
      createError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        "Invalid authorization token"
      )
    );
  }
};
