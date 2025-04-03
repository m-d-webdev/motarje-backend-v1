import prisma from "../prisma/SetUp.js";


class Car {
    constructor(
        data =
            {
                make: null,
                model: null,
                year: null,
                fuelType: null,
                transmission: null,
                bodyType: null,
                engine: null,
                horsepower: null,
                mileage: null,
                state: null,
                price: null,
                location: null,
                description: null,
                carMedia: null,
            }) {

        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.fuelType = data.fuelType;
        this.transmission = data.transmission;
        this.bodyType = data.bodyType;
        this.engine = data.engine;
        this.horsepower = data.horsepower;
        this.mileage = data.mileage;
        this.state = data.state;
        this.price = data.price;
        this.location = data.location;
        this.description = data.description;
        this.carMedia = data.carMedia;
    };
    validate() {
        if (typeof this.make !== 'string' || typeof this.model !== 'string') {
            return new Error("Make and Model must be strings.");
        };
        if (typeof this.year !== 'number' || this.year < 1886 || this.year > new Date().getFullYear()) {
            return new Error("Invalid year.");
        };
        if (typeof this.fuelType !== 'string' || typeof this.transmission !== 'string' || typeof this.bodyType !== 'string') {
            return new Error("Fuel type, transmission, and body type must be strings.");
        };

        if (typeof this.engine !== 'string') {
            return new Error("Engine must be a string.");
        };
        if (typeof this.horsepower !== 'number' || this.horsepower < 0) {
            return new Error("Horsepower must be a positive number.");
        };
        if (typeof milethis.age !== 'number' || this.mileage < 0) {
            return new Error("Mileage must be a positive number.");
        };
        if (typeof this.state !== 'string') {
            return new Error("State must be a string.");
        };
        if (typeof this.price !== 'number' || this.price < 0) {
            return new Error("Price must be a positive number.");
        };
        if (typeof this.location !== 'string') {
            return new Error("Location must be a string.");
        };
        if (typeof this.description !== 'string') {
            return new Error("Description must be a string.");
        };
        if (typeof this.carMedia !== 'array') {
            return new Error("Description must be a string.");
        }
    }
}

export const Get_data = ({ carId }) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const data = prisma.car.findFirst({
                    where: { id: carId },
                });
                resolve(data);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};


export const Add = ({ data }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const car = new Car(data);
                
                car.validate();

                const res = prisma.car.create({
                    data
                });

                resolve(res);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};