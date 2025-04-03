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


const SEND_MESSAGE = ({ to, body, subject }) => {
    return new Promise(
        
        async (resolve, reject) => {

            try {

                if (!to || !body) return reject({
                    ok: false,
                    type: "Send a message to client ",
                    message: "failed to find client email !"
                });

                const res = await Transport.sendMail({
                    subject,
                    text: body,
                    from: NODEMAILER_USER,
                    to
                })

                resolve(res);

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

// const SEND_MESSAGE = ({ to, body, subject }) => {
//     return new Promise(
//         async (resolve, reject) => {
//             try {
//                 if (!to || !body) return reject({
//                     ok: false,
//                     type: "Send a message to client ",
//                     message: "failed to find client phone number or the mesage !"
//                 });

//                 const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
//                 let res = await twilioClient.messages.create({
//                     to,
//                     body,
//                     from: TWILIO_PHONE_NUMBER
//                 });
//                 resolve(res.sid);
//             } catch (error) {
//                 reject({
//                     ok: false,
//                     type: "Send a message to client ",
//                     message: error.message
//                 })
//             }
//         }
//     )

// };



export default SEND_MESSAGE;
