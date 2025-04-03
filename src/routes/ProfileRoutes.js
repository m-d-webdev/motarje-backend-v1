import express from 'express'
import CheckAccess from '../middlewares/checkAccess.js';
import * as Profile from '../controllers/ProfileController.js'
const ProfileRoutes = express.Router();

ProfileRoutes.get('/', CheckAccess, Profile.Get_profile_data)

export default ProfileRoutes;