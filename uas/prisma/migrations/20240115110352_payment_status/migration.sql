/*
  Warnings:

  - You are about to drop the column `total` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `total`,
    ADD COLUMN `payment_status` ENUM('SUCCESS', 'UNPAID') NOT NULL DEFAULT 'UNPAID';
