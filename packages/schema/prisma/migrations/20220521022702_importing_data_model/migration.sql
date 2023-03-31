-- CreateTable
CREATE TABLE "PaymentAccount" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "account_identifier" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logo_url" TEXT NOT NULL,

    CONSTRAINT "PaymentAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "payment_method" TEXT NOT NULL,
    "payment_account_id" TEXT NOT NULL,
    "paid_amount" DOUBLE PRECISION,
    "mismatch" DOUBLE PRECISION,
    "paid_at" TIMESTAMP(3),
    "payment_receipt_url" TEXT,
    "confirmer" TEXT NOT NULL,
    "confirmed_at" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT E'CREATED',
    "deadline" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceItem" (
    "id" TEXT NOT NULL,
    "invoice_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "InvoiceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "slug" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cover_img_url" TEXT,
    "bg_img_url" TEXT,
    "published" TIMESTAMP(3),

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramAdmin" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "program_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProgramAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" TEXT NOT NULL,
    "program_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "slug" TEXT,
    "description" TEXT NOT NULL,
    "published" TIMESTAMP(3),
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "seq" INTEGER NOT NULL,
    "cover_img_url" TEXT,
    "bg_img_url" TEXT,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleAdmin" (
    "id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModuleAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleAccess" (
    "id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "granted_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModuleAccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleItem" (
    "id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "parent_item_id" TEXT,
    "is_root" BOOLEAN,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "seq" INTEGER NOT NULL DEFAULT 0,
    "mandatory" BOOLEAN NOT NULL DEFAULT true,
    "cover_img_url" TEXT,
    "bg_img_url" TEXT,

    CONSTRAINT "ModuleItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleItemAttachment" (
    "id" TEXT NOT NULL,
    "module_item_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "seq" TEXT NOT NULL,
    "mandatory" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ModuleItemAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleItemStatus" (
    "module_item_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'TOUCHED',
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ModuleItemAttachmentStatus" (
    "attachment_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'TOUCHED',
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "StudyGroup" (
    "id" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "enrollment_start" TIMESTAMP(3) NOT NULL,
    "enrollment_end" TIMESTAMP(3) NOT NULL,
    "active_start" TIMESTAMP(3) NOT NULL,
    "active_end" TIMESTAMP(3) NOT NULL,
    "logo_url" TEXT NOT NULL,
    "invoice_amount" DOUBLE PRECISION NOT NULL,
    "invoice_title" TEXT NOT NULL,
    "invoice_account_id" TEXT NOT NULL,
    "use_schedule" BOOLEAN,

    CONSTRAINT "StudyGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyGroupSchedule" (
    "study_group_id" TEXT NOT NULL,
    "module_item_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StudyGroupApplicant" (
    "study_group_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "invoice_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "StudyGroupStudent" (
    "study_group_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StudyGroupAdmin" (
    "study_group_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "program_id" TEXT,
    "module_id" TEXT,
    "text" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "grading_hint" TEXT,
    "max_score" DOUBLE PRECISION NOT NULL,
    "randomize_choices" BOOLEAN NOT NULL DEFAULT true,
    "created_by_id" TEXT NOT NULL,
    "validated_by_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validated_at" TIMESTAMP(3),

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionChoice" (
    "id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "answer_key" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "QuestionChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "rules" TEXT NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSection" (
    "id" TEXT NOT NULL,
    "exam_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "randomize_questions" BOOLEAN NOT NULL DEFAULT true,
    "nb_of_questions" INTEGER NOT NULL,
    "seq" INTEGER NOT NULL,
    "default_point" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL DEFAULT 1,

    CONSTRAINT "ExamSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSectionQuestion" (
    "section_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "min_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "max_scrore" DOUBLE PRECISION NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "StudyGroupExam" (
    "id" TEXT NOT NULL,
    "exam_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "duration_hour" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION,

    CONSTRAINT "StudyGroupExam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSheet" (
    "id" TEXT NOT NULL,
    "group_exam_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "grader_id" TEXT,
    "status" TEXT NOT NULL DEFAULT E'CREATED',
    "start_time" TIMESTAMP(3),
    "end_time" TIMESTAMP(3),
    "graded_at" TIMESTAMP(3),
    "grader_notes" TEXT,
    "score" DOUBLE PRECISION,

    CONSTRAINT "ExamSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSheetSection" (
    "id" TEXT NOT NULL,
    "exam_sheet_id" TEXT NOT NULL,
    "section_id" TEXT NOT NULL,

    CONSTRAINT "ExamSheetSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSheetItem" (
    "id" TEXT NOT NULL,
    "section_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "choices_id" TEXT,
    "answer" TEXT,
    "score" DOUBLE PRECISION,
    "graded_note" TEXT,
    "graded_at" TIMESTAMP(3),
    "graded_by_id" TEXT NOT NULL,
    "seq" INTEGER NOT NULL,

    CONSTRAINT "ExamSheetItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" TEXT NOT NULL,
    "created_by_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyGroupAnnouncement" (
    "announcement_id" TEXT NOT NULL,
    "study_group_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Program_code_key" ON "Program"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Program_slug_key" ON "Program"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Program_title_key" ON "Program"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Module_code_key" ON "Module"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleItemStatus_module_item_id_user_id_key" ON "ModuleItemStatus"("module_item_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleItemAttachmentStatus_attachment_id_user_id_key" ON "ModuleItemAttachmentStatus"("attachment_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "StudyGroup_name_key" ON "StudyGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StudyGroup_code_key" ON "StudyGroup"("code");

-- CreateIndex
CREATE UNIQUE INDEX "StudyGroupSchedule_study_group_id_module_item_id_key" ON "StudyGroupSchedule"("study_group_id", "module_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "StudyGroupApplicant_study_group_id_user_id_key" ON "StudyGroupApplicant"("study_group_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "StudyGroupApplicant_invoice_id_key" ON "StudyGroupApplicant"("invoice_id");

-- CreateIndex
CREATE UNIQUE INDEX "StudyGroupStudent_study_group_id_user_id_key" ON "StudyGroupStudent"("study_group_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "StudyGroupAdmin_study_group_id_user_id_key" ON "StudyGroupAdmin"("study_group_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Exam_title_code_module_id_key" ON "Exam"("title", "code", "module_id");

-- CreateIndex
CREATE UNIQUE INDEX "ExamSectionQuestion_section_id_question_id_key" ON "ExamSectionQuestion"("section_id", "question_id");

-- CreateIndex
CREATE UNIQUE INDEX "StudyGroupAnnouncement_announcement_id_study_group_id_key" ON "StudyGroupAnnouncement"("announcement_id", "study_group_id");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_confirmer_fkey" FOREIGN KEY ("confirmer") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_payment_account_id_fkey" FOREIGN KEY ("payment_account_id") REFERENCES "PaymentAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceItem" ADD CONSTRAINT "InvoiceItem_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceItem" ADD CONSTRAINT "InvoiceItem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramAdmin" ADD CONSTRAINT "ProgramAdmin_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramAdmin" ADD CONSTRAINT "ProgramAdmin_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleAdmin" ADD CONSTRAINT "ModuleAdmin_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleAdmin" ADD CONSTRAINT "ModuleAdmin_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleAccess" ADD CONSTRAINT "ModuleAccess_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleAccess" ADD CONSTRAINT "ModuleAccess_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItem" ADD CONSTRAINT "ModuleItem_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItem" ADD CONSTRAINT "ModuleItem_parent_item_id_fkey" FOREIGN KEY ("parent_item_id") REFERENCES "ModuleItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItemAttachment" ADD CONSTRAINT "ModuleItemAttachment_module_item_id_fkey" FOREIGN KEY ("module_item_id") REFERENCES "ModuleItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItemStatus" ADD CONSTRAINT "ModuleItemStatus_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItemStatus" ADD CONSTRAINT "ModuleItemStatus_module_item_id_fkey" FOREIGN KEY ("module_item_id") REFERENCES "ModuleItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItemAttachmentStatus" ADD CONSTRAINT "ModuleItemAttachmentStatus_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleItemAttachmentStatus" ADD CONSTRAINT "ModuleItemAttachmentStatus_attachment_id_fkey" FOREIGN KEY ("attachment_id") REFERENCES "ModuleItemAttachment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroup" ADD CONSTRAINT "StudyGroup_invoice_account_id_fkey" FOREIGN KEY ("invoice_account_id") REFERENCES "PaymentAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroup" ADD CONSTRAINT "StudyGroup_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupSchedule" ADD CONSTRAINT "StudyGroupSchedule_module_item_id_fkey" FOREIGN KEY ("module_item_id") REFERENCES "ModuleItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupSchedule" ADD CONSTRAINT "StudyGroupSchedule_study_group_id_fkey" FOREIGN KEY ("study_group_id") REFERENCES "StudyGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupApplicant" ADD CONSTRAINT "StudyGroupApplicant_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupApplicant" ADD CONSTRAINT "StudyGroupApplicant_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupApplicant" ADD CONSTRAINT "StudyGroupApplicant_study_group_id_fkey" FOREIGN KEY ("study_group_id") REFERENCES "StudyGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupStudent" ADD CONSTRAINT "StudyGroupStudent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupStudent" ADD CONSTRAINT "StudyGroupStudent_study_group_id_fkey" FOREIGN KEY ("study_group_id") REFERENCES "StudyGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupAdmin" ADD CONSTRAINT "StudyGroupAdmin_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupAdmin" ADD CONSTRAINT "StudyGroupAdmin_study_group_id_fkey" FOREIGN KEY ("study_group_id") REFERENCES "StudyGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_validated_by_id_fkey" FOREIGN KEY ("validated_by_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionChoice" ADD CONSTRAINT "QuestionChoice_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSection" ADD CONSTRAINT "ExamSection_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSectionQuestion" ADD CONSTRAINT "ExamSectionQuestion_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSectionQuestion" ADD CONSTRAINT "ExamSectionQuestion_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "ExamSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupExam" ADD CONSTRAINT "StudyGroupExam_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "StudyGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupExam" ADD CONSTRAINT "StudyGroupExam_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSheet" ADD CONSTRAINT "ExamSheet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSheet" ADD CONSTRAINT "ExamSheet_grader_id_fkey" FOREIGN KEY ("grader_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSheet" ADD CONSTRAINT "ExamSheet_group_exam_id_fkey" FOREIGN KEY ("group_exam_id") REFERENCES "StudyGroupExam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSheetSection" ADD CONSTRAINT "ExamSheetSection_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "ExamSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSheetSection" ADD CONSTRAINT "ExamSheetSection_exam_sheet_id_fkey" FOREIGN KEY ("exam_sheet_id") REFERENCES "ExamSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSheetItem" ADD CONSTRAINT "ExamSheetItem_graded_by_id_fkey" FOREIGN KEY ("graded_by_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSheetItem" ADD CONSTRAINT "ExamSheetItem_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSheetItem" ADD CONSTRAINT "ExamSheetItem_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "ExamSheetSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupAnnouncement" ADD CONSTRAINT "StudyGroupAnnouncement_study_group_id_fkey" FOREIGN KEY ("study_group_id") REFERENCES "StudyGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyGroupAnnouncement" ADD CONSTRAINT "StudyGroupAnnouncement_announcement_id_fkey" FOREIGN KEY ("announcement_id") REFERENCES "Announcement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
