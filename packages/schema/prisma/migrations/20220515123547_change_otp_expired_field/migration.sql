/*
  Warnings:

  - The `otpExpired` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "otpExpired",
ADD COLUMN     "otpExpired" TIMESTAMP(3);
