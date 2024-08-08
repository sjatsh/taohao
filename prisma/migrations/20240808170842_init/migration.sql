-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `num` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `origin_price` DOUBLE NULL,
    `image` VARCHAR(255) NOT NULL DEFAULT '',
    `content` LONGTEXT NOT NULL,
    `pay_type` VARCHAR(255) NOT NULL DEFAULT '',
    `kami` LONGTEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` VARCHAR(255) NOT NULL,
    `product_id` INTEGER NOT NULL,
    `num` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL DEFAULT 0,
    `email` VARCHAR(255) NOT NULL,
    `payment` VARCHAR(255) NOT NULL DEFAULT '',
    `status` INTEGER NOT NULL DEFAULT 0,
    `kami` LONGTEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `orders_order_id_key`(`order_id`),
    INDEX `orders_order_id_email_idx`(`order_id`, `email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
