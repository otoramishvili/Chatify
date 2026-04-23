import { UserType } from "../models/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: UserType;
      role: "user" | "admin";
    }
  }
}