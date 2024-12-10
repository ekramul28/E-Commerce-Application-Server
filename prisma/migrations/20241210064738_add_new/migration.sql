-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "cartId" TEXT;

-- AlterTable
ALTER TABLE "payments" ALTER COLUMN "payment_type" DROP NOT NULL;
