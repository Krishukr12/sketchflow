import { NextFunction, Request, Response } from "express";

export const userSignIn = (req: Request, res: Response) => {
  res.send("working fine");
};

export const userSignUp = (req: Request, res: Response, next: NextFunction) => {
  res.send("working fine");
};
