import * as AuthServices from '../services/AuthServices.js'
import gen_Refreshtoken from '../utils/auth/gen_Refreshtoken.js';
import gen_token from '../utils/auth/generateToken.js';


export const login = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) return res.status(400).json({ ok: false, message: "Field required" });

        let user = await AuthServices.login({ ...req.body });

        const refreshToken = gen_Refreshtoken({ id: user.id, email: user.email });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NDOE_ENV == "production",
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });


        const accessToken = gen_token({ id: user.id, email: user.email });

        return res.status(200).json({
            ok: true,
            user,
            accessToken,
        });


    } catch (error) {
        return res.status(500).send({
            ok: false,
            error: error.message,
            key: error.key,
        });
    }
};

export const register = async (req, res) => {
    try {

        if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name || !req.body.phone) return res.status(400).json({ ok: false, message: "Field required" })

        let user = await AuthServices.register({ ...req.body });
        const token = gen_token({ id: user.id, email: user.email })
        const Refreshtoken = gen_Refreshtoken({ id: user.id, email: user.email })

        res.cookie("refreshToken", Refreshtoken, {
            httpOnly: true,
            secure: process.env.NDOE_ENV == "production",
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            ok: true,
            accessToken: token,
            user
        });

    } catch (error) {
        return res.status(500).send({
            ok: false,
            error: error.message,
            key: error.key,
        });
    }
};

export const logout = async (req, res) => {
    try {

        res.clearCookie("refreshToken", { httpOnly: true, secure: process.env.NDOE_ENV == "production" });
            
        return res.status(200).json({
            ok: true,
            data: "loged out successfully !",
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message ? error.message : error,
        });
    }
};
