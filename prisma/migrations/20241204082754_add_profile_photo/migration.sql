/*
  Warnings:

  - Added the required column `name` to the `vendors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "profilePhoto" TEXT;

-- AlterTable
ALTER TABLE "vendors" ADD COLUMN     "name" TEXT NOT NULL;
