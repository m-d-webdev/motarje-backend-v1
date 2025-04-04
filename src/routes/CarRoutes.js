import express from 'express';
import CheckAccess from '../middlewares/checkAccess.js';
import * as CarController from '../controllers/CarController.js';



const CarRoutes = express.Router();

CarRoutes.post('/', CheckAccess, CarController.AddCar);
CarRoutes.get('/', CarController.GetCars);
CarRoutes.get('/:carId', CarController.Get_a_Car);
CarRoutes.put('/', CheckAccess, CarController.UpdateCar);
CarRoutes.delete('/', CheckAccess, CarController.DeleteCar);



export default CarRoutes;