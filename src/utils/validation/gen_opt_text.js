const gen_otp_text = ({ CODE, clientName }) => {
    return `Dear ${clientName},
Thank you for signing up with us! 
Your one-time password (OTP) for accessing your account is:

🔒 ${CODE}

This OTP is valid for 6 minutes. Please do not share this code with anyone. If you did not request this code, please ignore this email.

Thank you,

motarje
motarje.ma`;
}


export default gen_otp_text;