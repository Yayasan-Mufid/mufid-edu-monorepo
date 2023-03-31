/*
  Warnings:

  - Added the required column `seq` to the `QuestionChoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuestionChoice" ADD COLUMN     "seq" INTEGER NOT NULL;
