import { z } from 'zod';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { UserRoleFindManySchema } from '../findManyUserRole.schema';
import { InvoiceFindManySchema } from '../findManyInvoice.schema';
import { ProgramAdminFindManySchema } from '../findManyProgramAdmin.schema';
import { ModuleAdminFindManySchema } from '../findManyModuleAdmin.schema';
import { ModuleAccessFindManySchema } from '../findManyModuleAccess.schema';
import { ModuleItemStatusFindManySchema } from '../findManyModuleItemStatus.schema';
import { ModuleItemAttachmentStatusFindManySchema } from '../findManyModuleItemAttachmentStatus.schema';
import { StudyGroupApplicantFindManySchema } from '../findManyStudyGroupApplicant.schema';
import { StudyGroupStudentFindManySchema } from '../findManyStudyGroupStudent.schema';
import { StudyGroupAdminFindManySchema } from '../findManyStudyGroupAdmin.schema';
import { QuestionFindManySchema } from '../findManyQuestion.schema';
import { ExamSheetFindManySchema } from '../findManyExamSheet.schema';
import { ExamSheetItemFindManySchema } from '../findManyExamSheetItem.schema';
import { AnnouncementFindManySchema } from '../findManyAnnouncement.schema';
import { UploadedFileFindManySchema } from '../findManyUploadedFile.schema';
import { ModuleItemQuestionStatusFindManySchema } from '../findManyModuleItemQuestionStatus.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManySchema)])
      .optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManySchema)])
      .optional(),
    roles: z
      .union([z.boolean(), z.lazy(() => UserRoleFindManySchema)])
      .optional(),
    invoices: z
      .union([z.boolean(), z.lazy(() => InvoiceFindManySchema)])
      .optional(),
    confirmed_by_me_invoices: z
      .union([z.boolean(), z.lazy(() => InvoiceFindManySchema)])
      .optional(),
    managed_programs: z
      .union([z.boolean(), z.lazy(() => ProgramAdminFindManySchema)])
      .optional(),
    managed_modules: z
      .union([z.boolean(), z.lazy(() => ModuleAdminFindManySchema)])
      .optional(),
    accessible_modules: z
      .union([z.boolean(), z.lazy(() => ModuleAccessFindManySchema)])
      .optional(),
    module_item_status: z
      .union([z.boolean(), z.lazy(() => ModuleItemStatusFindManySchema)])
      .optional(),
    module_item_attachment_status: z
      .union([
        z.boolean(),
        z.lazy(() => ModuleItemAttachmentStatusFindManySchema),
      ])
      .optional(),
    applied_groups: z
      .union([z.boolean(), z.lazy(() => StudyGroupApplicantFindManySchema)])
      .optional(),
    enrolled_groups: z
      .union([z.boolean(), z.lazy(() => StudyGroupStudentFindManySchema)])
      .optional(),
    managed_groups: z
      .union([z.boolean(), z.lazy(() => StudyGroupAdminFindManySchema)])
      .optional(),
    created_questions: z
      .union([z.boolean(), z.lazy(() => QuestionFindManySchema)])
      .optional(),
    validated_questions: z
      .union([z.boolean(), z.lazy(() => QuestionFindManySchema)])
      .optional(),
    exam_sheets: z
      .union([z.boolean(), z.lazy(() => ExamSheetFindManySchema)])
      .optional(),
    graded_exam_sheets: z
      .union([z.boolean(), z.lazy(() => ExamSheetFindManySchema)])
      .optional(),
    graded_exam_item: z
      .union([z.boolean(), z.lazy(() => ExamSheetItemFindManySchema)])
      .optional(),
    created_announcements: z
      .union([z.boolean(), z.lazy(() => AnnouncementFindManySchema)])
      .optional(),
    uploaded_files: z
      .union([z.boolean(), z.lazy(() => UploadedFileFindManySchema)])
      .optional(),
    module_item_question_status: z
      .union([
        z.boolean(),
        z.lazy(() => ModuleItemQuestionStatusFindManySchema),
      ])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
