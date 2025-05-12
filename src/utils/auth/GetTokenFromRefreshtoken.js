import jwt from "jsonwebtoken"
import gen_token from "./generateToken.js";

const Gen_TokenFromRefreshtoken = (RefreshToken) => {
    return new Promise(
        (resolve, reject) => {
            try {

                jwt.verify(RefreshToken, process.env.JWT_REFRESHTOKEN_SECRET, (error, decoded) => {
                    if (error) return reject(
                        {
                            ok: false,
                            type: "verify refresh token ",
                            message: error.message ? error.message : error
                        });
                    const token = gen_token({ id: decoded.id, email: decoded.email });
                    resolve({ token, userId: decoded.id });
                });

            } catch (error) {

                reject({
                    ok: false,
                    type: "generate new access token from the refresh token ",
                    message: error.message
                })
            }
        }
    )
};
export default Gen_TokenFromRefreshtoken;