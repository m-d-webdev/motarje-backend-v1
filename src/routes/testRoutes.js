import axios from 'axios';
import express from 'express';
import { UAParser } from 'ua-parser-js';
import UPLOAD_TO_S3 from '../utils/upload_to_s3.js';


const TestRouter = express.Router();

TestRouter.get("/", async (req, res) => {
    const parser = new UAParser();
    const userAgent = req.headers["user-agent"];
    const deviceInfo = parser.setUA(userAgent).getResult();

    let ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.connection.remoteAddress;
    if (ip.startsWith("192.168.") || ip.startsWith("127.") || ip.startsWith("10.") || ip.startsWith("172.")) {
        ip = "8.8.8.8";
    }

    let geoData = {};
    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        geoData = response.data;
    } catch (error) {
        geoData = { error: "Unable to fetch location" };
    }

    res.json({
        ip: ip,
        location: {
            country: geoData.country,
            city: geoData.city,
            region: geoData.regionName,
            isp: geoData.isp
        },
        device: {
            browser: deviceInfo.browser.name,
            browserVersion: deviceInfo.browser.version,
            os: deviceInfo.os.name,
            osVersion: deviceInfo.os.version,
            deviceType: deviceInfo.device.type || "desktop"
        },
        language: req.headers["accept-language"],
        referrer: req.headers["referer"] || "Direct Visit"
    });
});

TestRouter.post("/posttos3", async (req, res) => {
    try {
        const { file } = req.files;

        let url = await UPLOAD_TO_S3({ ...file })
        return res.status(200).send({
            ok: true,
            data: {
                url
            },
        });
    } catch (error) {

        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
})

export default TestRouter
