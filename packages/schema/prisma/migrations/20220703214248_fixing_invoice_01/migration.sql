-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_confirmer_fkey";

-- AlterTable
ALTER TABLE "Invoice" ALTER COLUMN "confirmer" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_confirmer_fkey" FOREIGN KEY ("confirmer") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
