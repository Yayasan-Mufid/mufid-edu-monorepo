/*
  Warnings:

  - A unique constraint covering the columns `[group_exam_id,user_id]` on the table `ExamSheet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ExamSheet_group_exam_id_user_id_key" ON "ExamSheet"("group_exam_id", "user_id");
