/*
  Warnings:

  - You are about to drop the column `inventory` on the `products` table. All the data in the column will be lost.
  - Added the required column `Quantity` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "inventory",
ADD COLUMN     "Quantity" TEXT NOT NULL,
ADD COLUMN     "offerDiscount" TEXT,
ALTER COLUMN "price" SET DATA TYPE TEXT,
ALTER COLUMN "discount" SET DATA TYPE TEXT;
