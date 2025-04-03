import SEND_MESSAGE from "../utils/validation/SEND_MESSAGES.js";
import OtpHistory from "../mongodb/models/OtpHistory.js"
import prisma from "../prisma/SetUp.js";
import gen_otp_text from '../utils/validation/gen_opt_text.js';

export const SendOtp = async (req, res) => {
 
    try {

        const { userEmail, clientName, user } = req.body;

        const CODE = Math.floor(Math.random() * 8545687).toString().split("").slice(0, 6).join("");

        const dbRes = await OtpHistory.create({
            clientId: user.id,
            code: CODE
        });

        const emailText = gen_otp_text({ clientName, CODE });

        let sid = await SEND_MESSAGE({ body: emailText, to: userEmail, subject: "Your One-Time Password (OTP) for Secure Access " });

        return res.status(200).json({
            ok: true,
            data: {
                savedMessageId: dbRes._id,
            },
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
};

export const ValidateOtp = async (req, res) => {
    try {

        const { entredCode, savedMessageId, user } = req.body;
        if (!entredCode || !entredCode) return res.status(400).json({
            ok: false,
            error: "invalid credential "
        });

        const dbRes = await OtpHistory.findOne({
            _id: savedMessageId
        });

        // -*------------------------------

        if (!dbRes) return res.status(400).json({
            ok: false,
            error: "code to compare not found  !"
        });
        // -*------------------------------
        console.log("db res => ", dbRes);

        const sendedTime = new Date(dbRes.createAt).getTime();
        const now = Date.now();
      
        console.log('sent time =>', sendedTime);
        console.log('now =>', now);

        const min_diff = Math.floor((now - sendedTime) / (1000 * 60));

        console.log(min_diff);

        
        if (min_diff > 6) return res.status(400).json({
            ok: false,
            error: "time out !"
        });


        // -*------------------------------

        if (entredCode == dbRes.code) {

            await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    verified: true
                }
            });

            const dbRes = await OtpHistory.deleteOne({
                _id: savedMessageId
            });

            return res.status(200).json({
                ok: true,
                data: "veifired successfully !"
            });


        } else {
            return res.status(400).json({
                ok: false,
                error: "Invalid code ",
            });
        };
        

    } catch (error) {
    
        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
};