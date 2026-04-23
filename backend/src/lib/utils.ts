import { type Response } from "express";
import jwt from "jsonwebtoken";

export const generateToken = (
  userId: string, 
  role: "user" | "admin", 
  res: Response
) => 
{
  const token = jwt.sign(
    { userId, role }, 
    process.env.JWT_SECRET!, 
    { expiresIn: "7d" }
  );

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, 
    sameSite: "none", 
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
