-- CreateTable
CREATE TABLE `Recommendation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191),
    `title` VARCHAR(191),
    `company` VARCHAR(191),
    `location` VARCHAR(191),
    `easyApply` BOOLEAN,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
