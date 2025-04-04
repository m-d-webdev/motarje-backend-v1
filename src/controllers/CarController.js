import * as Cars from '../services/CarsServices.js';


export const GetCars = async (req, res) => {
    try {
        const {  from, liked_type } = req.query;
        const cars = await Cars.FetchAll({ from, liked_type: liked_type ? liked_type : null })
        return res.status(200).json({
            ok: true,
            data: {
                cars
            },
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
};
export const Get_a_Car = async (req, res) => {
    try {
        const {  carId } = req.body;
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

        const { user } = req.body;
        const { carMedia } = req.files;
        console.log(user);
        
        const data = await Cars.store({
            data: { ...req.body, owner_id: user.id },
            files: carMedia
        });

        return res.status(200).json({
            ok: true,
            data,
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
};

export const UpdateCar = async (req, res) => {
    try {

        const { user, carId, deletedFiles } = req.body;
        const { carMedia } = req.files;

        const data = await Cars.update({
            carId,
            data: { ...req.body },
            files: carMedia,
            deletedFiles
        });

        return res.status(200).json({
            ok: true,
            data,
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
};


export const DeleteCar = async (req, res) => {
    try {

        const { user, carId } = req.body;
        const data = await Cars.destroy({ carId });

        return res.status(200).json({
            ok: true,
            data,
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
};
