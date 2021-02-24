/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[authorId]` on the table `Post`. If there are existing duplicate values, the migration will fail.

*/
-- DropIndex
DROP INDEX `User.name_unique` ON `User`;

-- CreateIndex
CREATE UNIQUE INDEX `Post.authorId_unique` ON `Post`(`authorId`);
