import mng from "mongoose";

const TableSchema = mng.Schema({
    chat_id: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    body: {
        type: Text,
        required: true
    },
    readBy: {
        type: [String],
        default: []
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});



export default mng.model("messages", TableSchema);