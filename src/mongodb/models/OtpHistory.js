import mng from "mongoose";

const TableSchema = mng.Schema({

    clientId: {
        type: Number,
        required: true
    },
    
    code: {
        type: String,
        required: true
    },

    createAt: {
        type: Date,
        default: Date.now
    }

});



export default mng.model("OtpHistory", TableSchema);