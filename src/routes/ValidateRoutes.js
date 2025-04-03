import express from 'express'
import CheckAccess from '../middlewares/checkAccess.js';
import * as Validation from '../controllers/ValidateController.js';

const ValidationRoutes = express.Router();

ValidationRoutes.post("/send-otp", CheckAccess, Validation.SendOtp);
ValidationRoutes.post("/validate-otp", CheckAccess, Validation.ValidateOtp);

export default ValidationRoutes;
