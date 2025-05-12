import express from 'express'
import { configDotenv } from 'dotenv';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import cors from 'cors'
import TestRouter from '../routes/testRoutes.js';
import AuthRouter from '../routes/AuthRoutres.js';
import cookieParser from 'cookie-parser';
import ValidationRoutes from '../routes/ValidateRoutes.js';
import ProfileRoutes from '../routes/ProfileRoutes.js';
import CarRoutes from '../routes/CarRoutes.js';
const FRONENTURL = process.env.FRONENT_URL;
// -- 
const app = express();

app.use(cors({
    origin: ["http://localhost:3000", process.env.FRONTEND_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT"]
}));
// --
// app.use(fileUpload());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: "100MG" }));
app.use(cookieParser())


// --
configDotenv();

// ---------------


app.use(TestRouter)
app.use(AuthRouter)
app.use(ValidationRoutes)
app.use('/profile', ProfileRoutes);
app.use('/cars', CarRoutes);

// ---------------



export default app;