-- AlterTable
ALTER TABLE `Post` MODIFY `liked` BOOLEAN,
    MODIFY `clapped` BOOLEAN,
    MODIFY `loved` BOOLEAN,
    MODIFY `bright` BOOLEAN,
    MODIFY `support` BOOLEAN,
    MODIFY `curious` BOOLEAN,
    MODIFY `variantReactionsCount` INTEGER NOT NULL DEFAULT 0;
