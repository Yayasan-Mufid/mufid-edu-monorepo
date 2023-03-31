/*
  Warnings:

  - You are about to drop the column `mandatoryFilled` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `telegramId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `waNumber` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "mandatoryFilled",
DROP COLUMN "phoneNumber",
DROP COLUMN "telegramId",
DROP COLUMN "waNumber",
ADD COLUMN     "mandatory_filled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phone_number" TEXT,
ADD COLUMN     "telegram_id" TEXT,
ADD COLUMN     "wa_number" TEXT;
