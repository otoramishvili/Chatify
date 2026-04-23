import mongoose, { Types } from "mongoose";
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
declare const User: mongoose.Model<UserType, {}, {}, {}, mongoose.Document<unknown, {}, UserType> & UserType & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default User;
//# sourceMappingURL=user.model.d.ts.map