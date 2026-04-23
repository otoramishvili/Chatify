import mongoose, { Schema, Types } from "mongoose";

interface UserType {
  _id: Types.ObjectId;
  email: string;
  fullName: string;
  password: string;
  profilePic?: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserType>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true, 
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model<UserType>("User", userSchema);

export default User;