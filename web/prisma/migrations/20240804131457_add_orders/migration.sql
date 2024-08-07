-- AlterTable
ALTER TABLE `products` MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `image` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` VARCHAR(255) NOT NULL,
    `product_id` INTEGER NOT NULL,
    `num` INTEGER NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `orders_order_id_email_idx`(`order_id`, `email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
