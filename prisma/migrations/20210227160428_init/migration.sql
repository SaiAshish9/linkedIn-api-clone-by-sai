-- CreateTable
CREATE TABLE `Connection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191),
    `description` VARCHAR(191),
    `count` INTEGER,
    `background` VARCHAR(191),
    `avatar` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
