-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "num" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "origin_price" DOUBLE PRECISION,
    "image" VARCHAR(255) NOT NULL DEFAULT '',
    "content" TEXT NOT NULL,
    "pay_type" VARCHAR(255) NOT NULL DEFAULT '',
    "kami" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "order_id" VARCHAR(255) NOT NULL,
    "product_id" INTEGER NOT NULL,
    "num" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "email" VARCHAR(255) NOT NULL,
    "payment" VARCHAR(255) NOT NULL DEFAULT '',
    "status" INTEGER NOT NULL DEFAULT 0,
    "kami" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "orders_order_id_key" ON "orders"("order_id");

-- CreateIndex
CREATE INDEX "orders_order_id_email_idx" ON "orders"("order_id", "email");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
