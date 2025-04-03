import twilio from "twilio/lib/rest/Twilio.js";
import { configDotenv } from "dotenv";
configDotenv()

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);



export default twilioClient;