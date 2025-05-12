import { configDotenv } from "dotenv";
import twilioClient from "../../config/twilio/SetUp.js";
configDotenv();


export const SEND_SMS = ({ to, body }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                if (!to || !body) return reject({
                    ok: false,
                    type: "Send a message to client ",
                    message: "failed to find client phone number or the mesage !"
                });

                const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
                let res = await twilioClient.messages.create({
                    to,
                    body,
                    messagingServiceSid: "MGc776c299f52e06ad47da51b37bde7775"
                    // I need to buy a number -------------------------
                    // from: TWILIO_PHONE_NUMBER
                    // ------------------
                });
                resolve(res.sid);
            } catch (error) {
                reject({
                    ok: false,
                    type: "Send a message to client ",
                    message: error.message
                })
            }
        }
    );
};