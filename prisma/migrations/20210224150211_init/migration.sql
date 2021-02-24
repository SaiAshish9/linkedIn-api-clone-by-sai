/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[name]` on the table `User`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User.name_unique` ON `User`(`name`);
