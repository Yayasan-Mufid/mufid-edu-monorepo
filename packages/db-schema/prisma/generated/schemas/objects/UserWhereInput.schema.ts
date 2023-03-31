import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { UserRoleListRelationFilterObjectSchema } from './UserRoleListRelationFilter.schema';
import { InvoiceListRelationFilterObjectSchema } from './InvoiceListRelationFilter.schema';
import { ProgramAdminListRelationFilterObjectSchema } from './ProgramAdminListRelationFilter.schema';
import { ModuleAdminListRelationFilterObjectSchema } from './ModuleAdminListRelationFilter.schema';
import { ModuleAccessListRelationFilterObjectSchema } from './ModuleAccessListRelationFilter.schema';
import { ModuleItemStatusListRelationFilterObjectSchema } from './ModuleItemStatusListRelationFilter.schema';
import { ModuleItemAttachmentStatusListRelationFilterObjectSchema } from './ModuleItemAttachmentStatusListRelationFilter.schema';
import { StudyGroupApplicantListRelationFilterObjectSchema } from './StudyGroupApplicantListRelationFilter.schema';
import { StudyGroupStudentListRelationFilterObjectSchema } from './StudyGroupStudentListRelationFilter.schema';
import { StudyGroupAdminListRelationFilterObjectSchema } from './StudyGroupAdminListRelationFilter.schema';
import { QuestionListRelationFilterObjectSchema } from './QuestionListRelationFilter.schema';
import { ExamSheetListRelationFilterObjectSchema } from './ExamSheetListRelationFilter.schema';
import { ExamSheetItemListRelationFilterObjectSchema } from './ExamSheetItemListRelationFilter.schema';
import { AnnouncementListRelationFilterObjectSchema } from './AnnouncementListRelationFilter.schema';
import { UploadedFileListRelationFilterObjectSchema } from './UploadedFileListRelationFilter.schema';
import { ModuleItemQuestionStatusListRelationFilterObjectSchema } from './ModuleItemQuestionStatusListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    gender: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    date_of_birth: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    place_of_birth: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    username: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    password: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone_number: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    wa_number: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    telegram_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    otp: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    otp_expired: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    mandatory_filled: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    suspended: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    profile_picture: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    roles: z.lazy(() => UserRoleListRelationFilterObjectSchema).optional(),
    invoices: z.lazy(() => InvoiceListRelationFilterObjectSchema).optional(),
    confirmed_by_me_invoices: z
      .lazy(() => InvoiceListRelationFilterObjectSchema)
      .optional(),
    managed_programs: z
      .lazy(() => ProgramAdminListRelationFilterObjectSchema)
      .optional(),
    managed_modules: z
      .lazy(() => ModuleAdminListRelationFilterObjectSchema)
      .optional(),
    accessible_modules: z
      .lazy(() => ModuleAccessListRelationFilterObjectSchema)
      .optional(),
    module_item_status: z
      .lazy(() => ModuleItemStatusListRelationFilterObjectSchema)
      .optional(),
    module_item_attachment_status: z
      .lazy(() => ModuleItemAttachmentStatusListRelationFilterObjectSchema)
      .optional(),
    applied_groups: z
      .lazy(() => StudyGroupApplicantListRelationFilterObjectSchema)
      .optional(),
    enrolled_groups: z
      .lazy(() => StudyGroupStudentListRelationFilterObjectSchema)
      .optional(),
    managed_groups: z
      .lazy(() => StudyGroupAdminListRelationFilterObjectSchema)
      .optional(),
    created_questions: z
      .lazy(() => QuestionListRelationFilterObjectSchema)
      .optional(),
    validated_questions: z
      .lazy(() => QuestionListRelationFilterObjectSchema)
      .optional(),
    exam_sheets: z
      .lazy(() => ExamSheetListRelationFilterObjectSchema)
      .optional(),
    graded_exam_sheets: z
      .lazy(() => ExamSheetListRelationFilterObjectSchema)
      .optional(),
    graded_exam_item: z
      .lazy(() => ExamSheetItemListRelationFilterObjectSchema)
      .optional(),
    created_announcements: z
      .lazy(() => AnnouncementListRelationFilterObjectSchema)
      .optional(),
    uploaded_files: z
      .lazy(() => UploadedFileListRelationFilterObjectSchema)
      .optional(),
    module_item_question_status: z
      .lazy(() => ModuleItemQuestionStatusListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
