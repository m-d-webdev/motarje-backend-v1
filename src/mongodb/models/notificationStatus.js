import mongoose from 'mongoose'

const TableSchema = new mongoose.Schema({
    notificationId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "notification"
    },
    userId: {
        type: Number,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model("notification_status", TableSchema)