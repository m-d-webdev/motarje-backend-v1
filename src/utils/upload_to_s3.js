import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../config/aws/s3.js";
import { configDotenv } from "dotenv";
configDotenv();



const AWS_S3_BUCKETNAME = process.env.AWS_S3_BUCKETNAME;
const AWS_REGION = process.env.AWS_REGION;

const UPLOAD_TO_S3 = async ({
    name = "default.jpg",
    data = null,
    size = 0,
    encoding = "7bit",
    tempFilePath = "",
    truncated = false,
    mimetype = "",
    md5 = "",
    userId =Math.floor( Math.random() * 4653),
    FOLDER_IN_S3 = "",
    mv = () => console.log("No file move function provided"),
}) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const extention = name.substring(name.lastIndexOf('.'));
                const fileName = `${FOLDER_IN_S3}/${Date.now()}_${userId}_${extention}`;
                
                const commande = new PutObjectCommand({
                    Bucket: AWS_S3_BUCKETNAME,
                    Key: fileName,
                    Body: data,
                    ContentType: mimetype,
                });

                await s3.send(commande);
                const newFileUrl = `https://${AWS_S3_BUCKETNAME}.s3.${AWS_REGION}.amazonaws.com/${fileName}`;


                resolve({
                    message: "file uploaded successfully !",
                    ok: true,
                    url: newFileUrl,
                });
            } catch (err) {
                reject(err);
            }
        }
    )
};







// const UPLOAD_FILE_TO_S3 = ({ file, folderName = "" }) => {
//     return new Promise(
//         async (resolve, reject) => {
//             try {
//                 const fileExt = file.name.substring(file.name.lastIndexOf("."));
//                 let FileName = `${folderName}/${Date.now()}_${file.md5}${fileExt}`;
//                 const fileBody = file.data;

//                 const command = new PutObjectCommand({
//                     Bucket: AWS_S3_BUCKET,
//                     Key: FileName,
//                     Body: fileBody,
//                     ContentType: file.mimetype
//                 });
//                 const res = await s3.send(command);
//                 const fileUrl = `https://${AWS_S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/${FileName}`;

//                 resolve(fileUrl)
//             } catch (error) {
//                 reject(error)
//             }
//         }
//     )
// };




// const GET_FILE_URL_FROM_S3 = ({ key }) => {
//     return new Promise(
//         async (resolve, reject) => {
//             try {

//                 const command = new GetObjectCommand({
//                     Bucket: AWS_S3_BUCKET,
//                     Key: key,
//                 });
//                 const url = await getSignedUrl(s2, command, { expiresIn: "3600" })
//                 resolve(url);

//             } catch (error) {
//                 reject(error)
//             }
//         }
//     )
// };


export default UPLOAD_TO_S3;