/*
  Warnings:

  - You are about to drop the column `role` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `customers` table. All the data in the column will be lost.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "role",
DROP COLUMN "status";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "UserRole" NOT NULL,
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE';
