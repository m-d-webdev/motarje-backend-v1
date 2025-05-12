import prisma from '../prisma/SetUp.js';
import * as AuthServices from '../services/AuthServices.js'
import gen_Refreshtoken from '../utils/auth/gen_Refreshtoken.js';
import gen_token from '../utils/auth/generateToken.js';
import Gen_TokenFromRefreshtoken from '../utils/auth/GetTokenFromRefreshtoken.js';
import { GetUserById } from '../utils/auth/GetUserById.js';
import generaetRandomPassword from '../utils/validation/generaetRandomPassword.js';
import * as Notification from '../services/NotificationService.js'
import { newLoginNotificationMessage } from '../utils/client/new-login.js';
// ------------------------------------------

export const login = async (req, res) => {
    try {
        const { lang } = req.body
        if (!req.body.email || !req.body.password) return res.status(400).json({ ok: false, message: "Field required" });

        let user = await AuthServices.login({ ...req.body });

        // Send login notification -------------
        await Notification.create({
            doc: newLoginNotificationMessage({ lang: req.body.lang ?? "en", userName: `${user.fullName}` }),
            recipients: [user],
            lang: lang ?? "en",
            sendEmail: true,
            sendSMS:true,
        });

        // -------------------
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

        console.log("failed to login nin ", error);

        return res.status(500).send({
            ok: false,
            error: error?.message,
            key: error.key,
        });
    }
};

export const register = async (req, res) => {
    try {

        if (
            !req.body.email ||
            !req.body.password ||
            !req.body.fullName ||
            !req.body.phone ||
            !req.body.address
        ) return res.status(400).json({ ok: false, message: "Field required" })

        let user = await AuthServices.register({ ...req.body });

        const token = gen_token({ id: user.id, email: user.email });
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
export const registerSocial = async (req, res) => {
    try {
        if (!req.body.email || !req.body.first_name || !req.body.last_name) return res.status(400).json({ ok: false, message: "Field required" })
        let user;
        const CheckUser = await GetUserById({ email: req.body.email });
        if (CheckUser) {
            // const newUser = await prisma.user.update({
            //     data: { ...req.body, },
            //     where: { id: CheckUser.id }
            // });
            user = CheckUser;
        }
        else {
            const password = await generaetRandomPassword();
            user = await AuthServices.register({ ...req.body, password, phone: "0000000000" });
        }

        // other case if its not exists 
        const token = gen_token({ id: user.id, email: user.email });
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

// ------------------------------------------

export const GetTokenFromRefreshtoken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json({
            ok: false,
            error: "no token matched on the request !",
        });

        let { token, userId } = await Gen_TokenFromRefreshtoken(refreshToken);

        const user = await GetUserById({ id: userId })

        if (!user) {
            res.clearCookie("refreshToken", { httpOnly: true, secure: process.env.NDOE_ENV == "production" });
            return res.status(404).json({ error: "user not foud " });
        }
        return res.status(200).json({
            ok: true,
            data: "Save the access token and send it with every required auth request !",
            accessToken: token,
            user
        });
    } catch (error) {
        console.log(error);

        return res.status(401).json({
            ok: false,
            error: error.message,
        });
    }
};


// ------------------------------------------



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
