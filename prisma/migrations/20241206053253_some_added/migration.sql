/*
  Warnings:

  - You are about to drop the `_ShopFollowers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ShopFollowers" DROP CONSTRAINT "_ShopFollowers_A_fkey";

-- DropForeignKey
ALTER TABLE "_ShopFollowers" DROP CONSTRAINT "_ShopFollowers_B_fkey";

-- DropTable
DROP TABLE "_ShopFollowers";
