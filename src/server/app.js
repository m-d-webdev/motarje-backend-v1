import express from 'express'
import { configDotenv } from 'dotenv';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import cors from 'cors'
import TestRouter from '../routes/testRoutes.js';
import AuthRouter from '../routes/AuthRoutres.js';
import cookieParser from 'cookie-parser';
const FRONENTURL = process.env.FRONENT_URL;
// -- 
const app = express();

app.use(cors({
    credentials: true,
    methods: '*',
    origin: FRONENTURL
}));
// --
app.use(fileUpload());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: "100MG" }));
app.use(cookieParser())


// --
configDotenv();



// ---------------
app.use(TestRouter)
app.use(AuthRouter)

// ---------------



export default app;