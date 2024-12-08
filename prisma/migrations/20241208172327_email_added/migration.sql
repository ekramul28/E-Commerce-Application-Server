/*
  Warnings:

  - You are about to drop the column `customerId` on the `carts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `carts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `carts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "carts" DROP CONSTRAINT "carts_customerId_fkey";

-- DropIndex
DROP INDEX "carts_customerId_key";

-- AlterTable
ALTER TABLE "carts" DROP COLUMN "customerId",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "carts_email_key" ON "carts"("email");

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_email_fkey" FOREIGN KEY ("email") REFERENCES "customers"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
