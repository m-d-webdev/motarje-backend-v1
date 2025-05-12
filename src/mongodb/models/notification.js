import mongoose from 'mongoose'
    ;
const attachSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})


const TableSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    attachs: {
        type: [attachSchema],
        required: false
    },
    date: {
        type: Date,
        required: false,
        default: Date.now()
    }
});


TableSchema.virtual("status", {
    ref: "notification_status",
    localField: "_id",
    foreignField: "notificationId"
})


TableSchema.set("toJSON", { virtuals: true });
TableSchema.set("toObject", { virtuals: true })


export default mongoose.model("notification", TableSchema);