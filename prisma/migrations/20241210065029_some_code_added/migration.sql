/*
  Warnings:

  - You are about to drop the column `userId` on the `payments` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "userId",
ADD COLUMN     "customerId" TEXT NOT NULL;
