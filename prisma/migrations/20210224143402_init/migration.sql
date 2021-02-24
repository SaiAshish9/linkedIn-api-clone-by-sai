/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[name]` on the table `User`. If there are existing duplicate values, the migration will fail.
  - Made the column `name` on table `User` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User.name_unique` ON `User`(`name`);
