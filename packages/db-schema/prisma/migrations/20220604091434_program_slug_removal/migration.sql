/*
  Warnings:

  - You are about to drop the column `slug` on the `Program` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Program_slug_key";

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "slug";
