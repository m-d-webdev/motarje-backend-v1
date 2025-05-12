import prisma from "../prisma/SetUp.js"
import UPLOAD_TO_S3 from "../utils/upload_to_s3.js";

export const Get_a_user_data = ({ id }) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const user = await prisma.user.findFirst({

                    where: { id },

                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                        cars: true,
                        email: true,
                        gender: true,
                        phone: true,
                        profile_image: true,
                        verified: true,
                        age: true,
                    }
                });

                resolve(user);

            } catch (error) {

                reject({
                    ok: false,
                    type: "Get a user profile data",
                    message: error.message
                });

            }
        }
    )
}

export const updateUserFields = ({ data, id }) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                if (data["profile_image"]) {
                    const newImage = data.profile_image;
                    const newUrl = await UPLOAD_TO_S3({ ...newImage, FOLDER_IN_S3: "userPics" })
                    data['profile_image'] = newUrl;
                }
                delete data["id"];
                const user = await prisma.user.update(
                    {
                        data,
                        where: { id },
                    }

                );

                resolve(user);

            } catch (error) {

                reject({
                    ok: false,
                    type: "update user",
                    message: error.message
                });

            }
        }
    )
}