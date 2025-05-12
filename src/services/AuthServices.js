import Prisma from "../Prisma/SetUp.js";
import bcrypt from 'bcrypt'
import gen_token from "../utils/auth/generateToken.js";


const malesPic = [
    "https://i.pinimg.com/236x/bd/42/8e/bd428e6bb156d90045700dbf3e967c3e.jpg",
    "https://i.pinimg.com/236x/a6/c1/7a/a6c17a83c85b2e2492ff6981f66e409e.jpg",
    "https://i.pinimg.com/236x/e4/4a/09/e44a09d4fc648627e9b7174031995121.jpg",
    "https://i.pinimg.com/236x/56/c7/5d/56c75d13636b5830b34385f6df90ca43.jpg",
    "https://i.pinimg.com/236x/63/f0/0d/63f00d6ebe2c93b945be3c39135503c2.jpg"
]

const femalePics = [
    "https://i.pinimg.com/236x/a9/75/93/a975934bb378afc4ca8c133df451f56e.jpg",
    "https://i.pinimg.com/236x/49/a2/52/49a252c6f069e302bdcfc62d23c4ec6f.jpg",
    "https://i.pinimg.com/236x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg",
    "https://i.pinimg.com/236x/31/df/eb/31dfebce3e4f1b2cc267862f57f6ba7b.jpg",
    "https://i.pinimg.com/236x/ed/39/a7/ed39a771e01c2bc1b1e76bf95e95ae25.jpg"
]
const PrivateUserPic = "https://i.pinimg.com/236x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg"



export const register = ({

    fullName = "",
    phone = "",
    address = "",
    email = "",
    password = null,

}) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const salt = await bcrypt.genSalt(10);
                let hashedPassword = await bcrypt.hash(password, salt);
                const data = await Prisma.user.create({
                    data: {
                        fullName,
                        email,
                        password: hashedPassword,
                    }
                });

                // await Prisma.profile.create({
                //     data: {
                //         user: data.id,
                //         address: "",
                //         phone: "",
                //         bio: null,
                //         age: null,
                //         gender: "private",
                //         profile_image: null,
                //         verified: false,
                //         userId: null
                //     }
                // });

                delete data['password']
                resolve(data);
            } catch (error) {
                console.log("❌ error creating user  ", error);

                reject({
                    message: {
                        message: error.message,
                        key: error.meta?.target
                    }
                });
            }
        }
    );
};


export const login = ({ email, password }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const user = await Prisma.user.findFirst({
                    where: {
                        email
                    }
                });

                if (!user) {
                    return reject({
                        message: "user not found with email",
                        key: "Email_notfound"
                    })
                };

                const isMath = await bcrypt.compare(password, user.password)

                if (!isMath) {
                    return reject({ message: "incorrect password", key: "Password_incorrect" });
                };

                delete user['password'];

                resolve(user);

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};


