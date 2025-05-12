import { configDotenv } from "dotenv";
// import twilioClient from "../../config/twilio/SetUp.js";
import nodemailer from "nodemailer"
configDotenv();

const NODEMAILER_USER = process.env.NODEMAILER_USER;
const NODEMAILER_PASS = process.env.NODEMAILER_PASS;

const Transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS
    }

})


export const SEND_EMAIL = ({ to, body, subject, html }) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                if (!to || (!body && !html)) return reject({
                    ok: false,
                    type: "Send a message to client ",
                    message: "failed to find client email !"
                });

                if (html) {
                    const res = await Transport.sendMail({
                        subject,
                        html,
                        from: NODEMAILER_USER,
                        to
                    })
                    resolve(res);
                }

                else if (body) {
                    const res = await Transport.sendMail({
                        subject,
                        text: body,
                        from: NODEMAILER_USER,
                        to
                    })
                    resolve(res);
                }

            } catch (error) {

                reject({
                    ok: false,
                    type: "Send a message to client ",
                    message: error.message
                })
            }
        }
    )

};
