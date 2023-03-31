/*
  Warnings:

  - You are about to drop the column `dateOfBirth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `placeOfBirth` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "dateOfBirth",
DROP COLUMN "placeOfBirth",
ADD COLUMN     "date_of_birth" TIMESTAMP(3),
ADD COLUMN     "place_of_birth" TEXT;
