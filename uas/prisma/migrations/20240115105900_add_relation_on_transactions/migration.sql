-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
