import moment from "moment"

export const newLoginNotificationMessage = ({ lang = "en", userName = "" }) => {
    moment.locale(lang);
    const at = { en: " At ", fr: "à", ar: "على الساعة " }[lang]
    const currentTime = moment().format(`MMMM  DD YYYY [${at}] hh:mm A`)
    const variant = {
        en: {
            type: "new-login",
            title: "Login Successful",
            description: `Hello ${userName}, you have successfully logged in to your account at Motarje on ${currentTime}.`,
        },
        fr: {
            type: "new-login",
            title: "Connexion réussie",
            description: `Bonjour ${userName}, vous vous êtes connecté avec succès à votre compte chez Motarje le ${currentTime}.`,
        },
        ar: {
            type: "new-login",
            title: "تم تسجيل الدخول بنجاح",
            description: `مرحباً ${userName}, لقد قمت بتسجيل الدخول إلى حسابك في Motarje في ${currentTime}.`,
        },
    }
    return variant[lang]
}


export let newLoginEmailSubject = ({ lang = "en" }) => {
    const subject = {
        en: "Login Successful – Welcome Back to Motarje!",
        fr: "Connexion réussie – Bienvenue de nouveau sur Motarje !",
        ar: "تم تسجيل الدخول بنجاح – مرحباً بك من جديد في Motarje!"
    }[lang]


    return subject;
}