-- AlterTable
ALTER TABLE `Post` MODIFY `reactions` VARCHAR(191),
    MODIFY `liked` BOOLEAN DEFAULT false,
    MODIFY `clapped` BOOLEAN DEFAULT false,
    MODIFY `loved` BOOLEAN DEFAULT false,
    MODIFY `bright` BOOLEAN DEFAULT false,
    MODIFY `support` BOOLEAN DEFAULT false,
    MODIFY `curious` BOOLEAN DEFAULT false;
