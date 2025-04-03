import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";
configDotenv()

const gen_Refreshtoken = (data) => {
    const token = jwt.sign(data, process.env.JWT_REFRESHTOKEN_SECRET, { expiresIn: "7d" })
    return token;
}


export default gen_Refreshtoken;