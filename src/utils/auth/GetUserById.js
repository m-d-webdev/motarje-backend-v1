import prisma from "../../prisma/SetUp.js";

export const GetUserById = ({ id, email = "" }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                // Code 
                let fitlerOn = [];
                if (id) fitlerOn.push({ id });
                if (email) fitlerOn.push({ email });
                const user = await prisma.user.findFirst({
                    where: {
                        OR: [
                            ...fitlerOn
                        ]
                    }
                });
                if (!user) return reject({ message: "user not Found" });
                delete user['password']

                resolve(user);
            } catch (error) {
                console.log(error);

                reject({ message: error.message });
            }
        }
    );
};