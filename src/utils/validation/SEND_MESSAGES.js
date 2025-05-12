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



