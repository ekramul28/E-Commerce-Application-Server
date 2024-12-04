/*
  Warnings:

  - You are about to drop the column `userId` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `vendors` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "admins" DROP CONSTRAINT "admins_userId_fkey";

-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_userId_fkey";

-- DropForeignKey
ALTER TABLE "vendors" DROP CONSTRAINT "vendors_userId_fkey";

-- DropIndex
DROP INDEX "admins_userId_key";

-- DropIndex
DROP INDEX "customers_userId_key";

-- DropIndex
DROP INDEX "vendors_userId_key";

-- AlterTable
ALTER TABLE "admins" DROP COLUMN "userId",
ADD COLUMN     "contactNumber" TEXT,
ADD COLUMN     "profilePhoto" TEXT;

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "vendors" DROP COLUMN "userId",
ADD COLUMN     "contactNumber" TEXT,
ADD COLUMN     "profilePhoto" TEXT;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendors" ADD CONSTRAINT "vendors_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
