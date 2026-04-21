import mongoose, { Types } from "mongoose";
interface MessageType {
    senderId: Types.ObjectId;
    receiverId: Types.ObjectId;
    text?: string;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const Message: mongoose.Model<MessageType, {}, {}, {}, mongoose.Document<unknown, {}, MessageType> & MessageType & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>;
export default Message;
//# sourceMappingURL=message.model.d.ts.map