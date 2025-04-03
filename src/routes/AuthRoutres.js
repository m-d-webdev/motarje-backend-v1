import express from 'express';
import * as AuthController from "../controllers/AuthController.js"
import CheckAccess from '../middlewares/checkAccess.js';

const AuthRouter = express.Router();

AuthRouter.post("/register", AuthController.register);
AuthRouter.post("/login", AuthController.login);
AuthRouter.get("/logout", CheckAccess, AuthController.logout);
AuthRouter.get("/refresh-token",  AuthController.GetTokenFromRefreshtoken);



export default AuthRouter;