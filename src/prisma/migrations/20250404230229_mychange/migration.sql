-- AlterTable
ALTER TABLE `car` ADD COLUMN `isPriceFix` BOOLEAN NULL DEFAULT true,
    MODIFY `year` VARCHAR(191) NULL,
    MODIFY `horsepower` VARCHAR(191) NULL,
    MODIFY `mileage` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `verified` BOOLEAN NOT NULL DEFAULT true;
