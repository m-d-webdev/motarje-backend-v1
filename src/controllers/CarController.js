import * as Cars from '../services/CarsServices.js';


export const GetCar = async (req, res) => {
    try {
        const { user, carId } = req.body;
        const car = await Cars.Get_data({ carId })
        return res.status(200).json({
            ok: true,
            data: {
                car
            },
        });
   
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
};



export const AddCar = async (req, res) => {
    try {
        const { user, newCarData } = req.body;

        return res.status(200).json({
            ok: true,
            data: "",
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
};
