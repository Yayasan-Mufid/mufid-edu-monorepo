/*
  Warnings:

  - You are about to drop the column `userId` on the `UserRole` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,role_name]` on the table `UserRole` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `UserRole` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_userId_fkey";

-- DropIndex
DROP INDEX "UserRole_userId_role_name_key";

-- AlterTable
ALTER TABLE "UserRole" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_user_id_role_name_key" ON "UserRole"("user_id", "role_name");

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
