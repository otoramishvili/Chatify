import mongoose, { Schema, Types } from "mongoose";
const messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text: {
        type: String,
    },
    image: {
        type: String,
    },
}, { timestamps: true });
const Message = mongoose.model("Message", messageSchema);
export default Message;
//# sourceMappingURL=message.model.js.map