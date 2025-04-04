import prisma from "../prisma/SetUp.js";
import DELETE_FROM_S3 from "../utils/delete_from_s3.js";
import UPLOAD_TO_S3 from "../utils/upload_to_s3.js";


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

        return true
    }
}
export const FetchAll = ({ from = 0, limit = 10, liked_type = null }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                let cars = await prisma.car.findMany({
                    skip: from,
                    take: limit,
                    where: {
                        body_type: liked_type ? liked_type : new RegExp("")
                    },
                    include: {

                        media: true,
                        owner: true,
                        listing: true
                    }
                });
                if (cars.length == 0) {
                    cars = await prisma.car.findMany({
                        skip: from,
                        take: limit,
                        include: {
                            media: true,
                            owner: true,
                            listing: true
                        }
                    });
                }
                console.log(cars);
                resolve(cars);

            } catch (error) {
                reject(
                    {
                        ok: false,
                        message: error.message
                    }
                )
            }
        }
    )
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


export const store = ({ data, files }) => {
    return new Promise(
        async (resolve, reject) => {

            try {
                const car = new Car(data);
                // const isOk = car.validate();
                // if (isOk != true) {
                //     return reject({
                //         ok: false,
                //         message: isOk.message
                //     })
                // }

                delete data['user'];
                console.log(files);

                const res = await prisma.car.create({
                    data: {
                        ...data,
                        owner_id: data.owner_id
                    }
                });

                if (Array.isArray(files)) {
                    await Promise.all(
                        files.map(async file => {

                            let url = await UPLOAD_TO_S3({ ...file, FOLDER_IN_S3: "cars" });
                            const fileType = file.mimetype.substring(0, file.mimetype.indexOf("/"));


                            await prisma.carMedia.create({
                                data: {
                                    link: url,
                                    carId: res.id,
                                    type: fileType == "application" ? "pdf" : fileType
                                }
                            })
                        })
                    );
                } else {
                    let url = await UPLOAD_TO_S3({ ...files, FOLDER_IN_S3: "cars" });
                    const fileType = files.mimetype.substring(0, files.mimetype.indexOf("/"));


                    await prisma.carMedia.create({
                        data: {
                            link: url,
                            carId: res.id,
                            type: fileType == "application" ? "pdf" : fileType
                        }
                    })
                }


                resolve();


            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};


export const update = ({ carId, data, deletedFiles, files }) => {
    return new Promise(
        async (resolve, reject) => {

            try {

                // const car = new Car(data);
                // const isOk = car.validate();
                // if (isOk != true) {
                //     return reject({
                //         ok: false,
                //         message: isOk.message
                //     })
                // }    


                delete data['user'];

                const res = await prisma.car.update({
                    where: { id: carId },
                    data
                });

                await Promise.all(
                    files.map(async file => {
                        let url = await UPLOAD_TO_S3({ ...file, FOLDER_IN_S3: "cars" });
                        const fileType = file.mimetype.substring(0, file.mimetype.indexOf("/"));
                        await prisma.carMedia.create({
                            data: {
                                link: url,
                                carId: carId,
                                type: fileType == "application" ? "pdf" : fileType
                            }
                        })
                    })
                );

                await Promise.all(
                    deletedFiles.map(async file => {
                        await DELETE_FROM_S3({ url: file.link });
                        await prisma.carMedia.delete({
                            where: {
                                id: file.id
                            }
                        })
                    })
                );

                resolve({
                    ok: true
                });


            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};

export const destroy = ({ carId }) => {
    return new Promise(
        async (resolve, reject) => {

            try {

                // const car = new Car(data);
                // const isOk = car.validate();
                // if (isOk != true) {
                //     return reject({
                //         ok: false,
                //         message: isOk.message
                //     })
                // }

                const files = await prisma.carMedia.findMany({
                    where: {
                        carId
                    }
                })

                delete data['user'];

                await Promise.all(
                    files.map(async file => {
                        await DELETE_FROM_S3({ url: file.link });
                        await prisma.carMedia.delete({
                            where: {
                                id: file.id
                            }
                        })
                    })
                );
                await prisma.listing.deleteMany({
                    where: {
                        carId
                    }
                });

                await prisma.car.delete({
                    where: {
                        id: carId
                    }
                });


                resolve({
                    ok: true
                });


            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};