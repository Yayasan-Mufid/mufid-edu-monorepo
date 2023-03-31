/*
  Warnings:

  - Changed the type of `seq` on the `ModuleItemAttachment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ModuleItemAttachment" DROP COLUMN "seq",
ADD COLUMN     "seq" INTEGER NOT NULL;
