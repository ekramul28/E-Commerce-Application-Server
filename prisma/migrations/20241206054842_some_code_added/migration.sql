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
ALTER TABLE "products" ADD CONSTRAINT "products_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShopFollowers" ADD CONSTRAINT "_ShopFollowers_A_fkey" FOREIGN KEY ("A") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShopFollowers" ADD CONSTRAINT "_ShopFollowers_B_fkey" FOREIGN KEY ("B") REFERENCES "shops"("id") ON DELETE CASCADE ON UPDATE CASCADE;
