-- DropForeignKey
ALTER TABLE `carmedia` DROP FOREIGN KEY `CarMedia_carId_fkey`;

-- DropIndex
DROP INDEX `CarMedia_carId_key` ON `carmedia`;

-- AddForeignKey
ALTER TABLE `CarMedia` ADD CONSTRAINT `CarMedia_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
