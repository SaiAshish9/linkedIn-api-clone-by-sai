-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `headline` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191),
    `image` VARCHAR(191),
    `userReaction` VARCHAR(191) NOT NULL,
    `published` VARCHAR(191) NOT NULL,
    `authorId` INTEGER,
    `videoUrl` VARCHAR(191),
    `commentCount` INTEGER,
    `reactions` INTEGER,
    `liked` BOOLEAN NOT NULL,
    `clapped` BOOLEAN NOT NULL,
    `loved` BOOLEAN NOT NULL,
    `bright` BOOLEAN NOT NULL,
    `support` BOOLEAN NOT NULL,
    `curious` BOOLEAN NOT NULL,
    `variantReactionsCount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
