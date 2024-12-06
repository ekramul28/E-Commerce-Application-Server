/*
  Warnings:

  - You are about to drop the `_UserFollowedShops` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserFollowedShops" DROP CONSTRAINT "_UserFollowedShops_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFollowedShops" DROP CONSTRAINT "_UserFollowedShops_B_fkey";

-- DropTable
DROP TABLE "_UserFollowedShops";

-- CreateTable
CREATE TABLE "_CustomerToShop" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CustomerToShop_AB_unique" ON "_CustomerToShop"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomerToShop_B_index" ON "_CustomerToShop"("B");

-- AddForeignKey
ALTER TABLE "_CustomerToShop" ADD CONSTRAINT "_CustomerToShop_A_fkey" FOREIGN KEY ("A") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerToShop" ADD CONSTRAINT "_CustomerToShop_B_fkey" FOREIGN KEY ("B") REFERENCES "shops"("id") ON DELETE CASCADE ON UPDATE CASCADE;
