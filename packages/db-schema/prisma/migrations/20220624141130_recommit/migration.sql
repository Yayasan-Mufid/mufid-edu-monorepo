/*
  Warnings:

  - You are about to drop the column `otpExpired` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "otpExpired",
ADD COLUMN     "otp_expired" TIMESTAMP(3);
