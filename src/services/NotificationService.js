import notification from "../mongodb/models/notification.js";
import notificationStatus from "../mongodb/models/notificationStatus.js";
import { newLoginEmailSubject } from "../utils/client/new-login.js";
import { SEND_EMAIL } from './Contact/Emailing.js'
import fs from 'fs'
import path, { dirname, join } from 'path'
// import __dirname from ''
import { fileURLToPath } from 'url';
import { SEND_SMS } from "./Contact/sms.js";

// Get the equivalent of __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = ({
    doc = {
        type: "",
        title: "",
        description: "",
        attachs: []
    },
    recipients = [],
    sendEmail = true,
    sendSMS = false,
    lang
}) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                //validation 
                const { type, title, description, attachs } = doc
                if (!type && (!title && !description)) reject();

                // --------------------------

                let data = {
                    notification: null,
                    recipients: []

                };

                // -------------- Create the main document ----

                await notification
                    .create({
                        type,
                        title,
                        description,
                        attachs: attachs ?? [],
                    })
                    // create notification for each recipients
                    .then(async doc => {
                        data.notification = doc;
                        Promise.all(
                            recipients.map(async r => {

                                let newDocument = await notificationStatus
                                    .create({
                                        notificationId: doc._id,
                                        userId: r.id
                                    })

                                // --Push new row ----------------------------------

                                data.recipients.push({
                                    id: r,
                                    document: newDocument
                                });


                                // -------------------
                            })
                        )
                    }).catch(error => {
                        reject({
                            message: error?.message,
                        })
                    })

                if (sendEmail) {
                    await Promise.all(
                        recipients.map(async r => {

                            const body = await GenerateNewLoginEmail({
                                lang: lang,
                                userName: r.fullName
                            })

                            if (body) {
                                let mid = await SEND_EMAIL({
                                    subject: newLoginEmailSubject({ lang: lang ?? "en" }),
                                    html: body,
                                    to: r.email
                                });
                                console.log("Email sent ", mid);
                            }

                            // -------------------
                        })
                    )

                }
                if (sendSMS) {
                    await Promise.all(
                        recipients.map(async r => {
                            let mid = await SEND_SMS({
                                to: "+212767310612",
                                body:"Hello mustapa"
                            });
                            console.log("Message sent ", mid);
                            // -------------------
                        })
                    )

                }
                resolve({ data });


            } catch (error) {
                console.log(error);

                reject({ message: error.message });
            }
        }
    );
};


export const find = ({
    recipientsIds,
    unreadOnly,
    limit,
    page
}) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                let data;
                const doWehaseSomeParams =
                    recipientsIds ||
                    unreadOnly ||
                    limit ||
                    page
                if (doWehaseSomeParams) {
                    if (recipientsIds?.length > 0) {
                        data = await notification.aggregate([
                            {
                                $lookup: {
                                    from: "notification_status",
                                    localField: "_id",
                                    foreignField: "notificationId",
                                    as: "status"
                                }
                            },
                            {
                                $match: {
                                    "status.userId": { $in: recipientsIds },
                                    ...(unreadOnly ? { "status.read": false } : {})
                                }
                            },
                            {
                                $project: {
                                    'status': 0
                                }
                            }
                        ]).limit(limit ?? 10)
                            .skip(
                                (page && limit)
                                    ? page * limit
                                    : 0
                            )
                    }

                } else {
                    data = await notification.find().limit(200);
                }

                resolve({ data });
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};



export const maskRead = ({
    userId,
    notificationsIds
}) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                let data = {};
                // Code
                if (notificationsIds instanceof Array) {
                    let update = await notificationStatus.updateMany(
                        {
                            userId,
                            notificationId: notificationsIds
                        },
                        {
                            $set: {
                                read: true
                            }
                        }
                    )

                    if (update.modifiedCount == 0) {
                        data.ok = false;
                        data.message = "No items has been modified";
                    }
                    else {
                        data.modifiedCount = update.modifiedCount
                    }
                }

                resolve({ data });
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};


export const destroy = ({ notificationIds }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                // Code
                if (!notificationIds instanceof Array) return reject();

                const data = await notification.deleteMany({
                    id: { $in: notificationIds }
                });
                resolve({ data });

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};

export const GenerateNewLoginEmail = ({
    lang = "en",
    userName = ""
}) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const templatePath = path.join(__dirname, `/Contact/templates/${lang}`, `new-login.html`);

                const template = await fs.promises.readFile(templatePath, 'utf-8');

                const finalTemplate = template?.replace("{{userName}}", userName);

                resolve(finalTemplate);

            } catch (error) {
                console.log(error);
                reject({ message: error.message });
            }
        }
    );
};