-- DropForeignKey
ALTER TABLE "UploadedFile" DROP CONSTRAINT "UploadedFile_uploader_id_fkey";

-- AlterTable
ALTER TABLE "ModuleItem" ADD COLUMN     "is_quiz" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "ModuleItemQuestion" (
    "id" TEXT NOT NULL,
    "module_item_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,

    CONSTRAINT "ModuleItemQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleItemQuestionStatus" (
    "question_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ModuleItemQuestionStatus_question_id_user_id_key" ON "ModuleItemQuestionStatus"("question_id", "user_id");

-- AddForeignKey
ALTER TABLE "UploadedFile" ADD CONSTRAINT "UploadedFile_uploader_id_fkey" FOREIGN KEY ("uploader_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItemQuestion" ADD CONSTRAINT "ModuleItemQuestion_module_item_id_fkey" FOREIGN KEY ("module_item_id") REFERENCES "ModuleItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItemQuestion" ADD CONSTRAINT "ModuleItemQuestion_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItemQuestionStatus" ADD CONSTRAINT "ModuleItemQuestionStatus_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "ModuleItemQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItemQuestionStatus" ADD CONSTRAINT "ModuleItemQuestionStatus_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
