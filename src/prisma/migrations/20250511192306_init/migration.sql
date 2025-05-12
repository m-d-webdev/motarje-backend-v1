-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'private');

-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('Petrol', 'Diesel', 'Hybrid', 'Electric');

-- CreateEnum
CREATE TYPE "Transmission" AS ENUM ('Automatic', 'Manual');

-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible', 'Truck', 'Van');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('image', 'video', 'pdf');

-- CreateEnum
CREATE TYPE "ListingStatus" AS ENUM ('Available', 'Pending', 'Sold', 'Reserved', 'Expired', 'Withdrawn');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "phone" TEXT,
    "bio" TEXT,
    "age" INTEGER,
    "address" TEXT,
    "gender" "Gender" DEFAULT 'private',
    "profile_image" TEXT,
    "verified" BOOLEAN DEFAULT true,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "make" TEXT,
    "model" TEXT,
    "year" TEXT,
    "fuel_type" "FuelType",
    "transmission" "Transmission",
    "body_type" "BodyType",
    "engine" TEXT,
    "horsepower" TEXT,
    "mileage" TEXT,
    "state" TEXT,
    "isPriceFix" TEXT,
    "price" TEXT,
    "location" TEXT,
    "description" TEXT,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarMedia" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "link" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,

    CONSTRAINT "CarMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" SERIAL NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "guestId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "status" "ListingStatus" NOT NULL DEFAULT 'Available',
    "call_allowed" BOOLEAN NOT NULL DEFAULT true,
    "message_allowed" BOOLEAN NOT NULL DEFAULT true,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelledCar" (
    "id" SERIAL NOT NULL,
    "car_id" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "buyer_id" INTEGER NOT NULL,
    "sell_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SelledCar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SelledCar_car_id_key" ON "SelledCar"("car_id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarMedia" ADD CONSTRAINT "CarMedia_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SelledCar" ADD CONSTRAINT "SelledCar_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SelledCar" ADD CONSTRAINT "SelledCar_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
