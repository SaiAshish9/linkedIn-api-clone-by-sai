/*
  Warnings:

  - You are about to drop the column `variantReactionsCount` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `variantReactionsCount`,
    ADD COLUMN     `variableReactionsCount` INTEGER NOT NULL DEFAULT 0;
