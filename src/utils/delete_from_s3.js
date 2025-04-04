
const DELETE_FROM_S3 = async ({ url }) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const command = new DeleteObjectCommand({
                    Bucket: AWS_S3_BUCKETNAME,
                    Key: url
                });

                await s3.send(command);

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



export default DELETE_FROM_S3;