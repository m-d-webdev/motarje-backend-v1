import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";
configDotenv()

const gen_token = (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET)
    return token;
}


export default gen_token;