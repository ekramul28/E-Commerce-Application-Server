-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "payment_processor" TEXT NOT NULL,
    "bank_trxid" TEXT,
    "pg_txnid" TEXT,
    "mer_txnid" TEXT,
    "payment_type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);
