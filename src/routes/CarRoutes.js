import express from 'express';
import CheckAccess from '../middlewares/checkAccess.js';
import * as CarController from '../controllers/CarController.js';



const CarRoutes = express.Router();

CarRoutes.post('/', CheckAccess, CarController.GetCar);
CarRoutes.get('/', CheckAccess, CarController.GetCar);



export default CarRoutes;