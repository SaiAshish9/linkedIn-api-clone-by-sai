-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191),
    `text1` VARCHAR(191),
    `text2` VARCHAR(191),
    `text3` VARCHAR(191),
    `published` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
