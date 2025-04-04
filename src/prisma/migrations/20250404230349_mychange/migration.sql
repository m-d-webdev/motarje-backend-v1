/*
  Warnings:

  - You are about to alter the column `isPriceFix` on the `car` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `car` MODIFY `price` VARCHAR(191) NULL,
    MODIFY `isPriceFix` VARCHAR(191) NULL;
