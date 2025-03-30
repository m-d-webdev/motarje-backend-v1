import { S3Client } from "@aws-sdk/client-s3"
import { configDotenv } from "dotenv";
configDotenv();



const AWS_ACCESS_KEY_ID = process.env.AWS_S3_ACCESSKEY
const AWS_SECRET_ACCESS_KEY = process.env.AWS_S3_SECRET
const AWS_REGION = process.env.AWS_REGION;


const s3 = new S3Client({
    credentials: {
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        accessKeyId: AWS_ACCESS_KEY_ID
    },
    region: AWS_REGION
});



export default s3;
