import prisma from "../prisma/SetUp.js"

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