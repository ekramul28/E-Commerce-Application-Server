/*
  Warnings:

  - You are about to drop the `_CustomerToShop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CustomerToShop" DROP CONSTRAINT "_CustomerToShop_A_fkey";

-- DropForeignKey
ALTER TABLE "_CustomerToShop" DROP CONSTRAINT "_CustomerToShop_B_fkey";

-- DropTable
DROP TABLE "_CustomerToShop";

-- CreateTable
CREATE TABLE "_ShopFollowers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ShopFollowers_AB_unique" ON "_ShopFollowers"("A", "B");

-- CreateIndex
CREATE INDEX "_ShopFollowers_B_index" ON "_ShopFollowers"("B");

-- AddForeignKey
ALTER TABLE "_ShopFollowers" ADD CONSTRAINT "_ShopFollowers_A_fkey" FOREIGN KEY ("A") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShopFollowers" ADD CONSTRAINT "_ShopFollowers_B_fkey" FOREIGN KEY ("B") REFERENCES "shops"("id") ON DELETE CASCADE ON UPDATE CASCADE;
