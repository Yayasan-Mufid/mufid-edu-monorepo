import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { UserRoleOrderByRelationAggregateInputObjectSchema } from './UserRoleOrderByRelationAggregateInput.schema';
import { InvoiceOrderByRelationAggregateInputObjectSchema } from './InvoiceOrderByRelationAggregateInput.schema';
import { ProgramAdminOrderByRelationAggregateInputObjectSchema } from './ProgramAdminOrderByRelationAggregateInput.schema';
import { ModuleAdminOrderByRelationAggregateInputObjectSchema } from './ModuleAdminOrderByRelationAggregateInput.schema';
import { ModuleAccessOrderByRelationAggregateInputObjectSchema } from './ModuleAccessOrderByRelationAggregateInput.schema';
import { ModuleItemStatusOrderByRelationAggregateInputObjectSchema } from './ModuleItemStatusOrderByRelationAggregateInput.schema';
import { ModuleItemAttachmentStatusOrderByRelationAggregateInputObjectSchema } from './ModuleItemAttachmentStatusOrderByRelationAggregateInput.schema';
import { StudyGroupApplicantOrderByRelationAggregateInputObjectSchema } from './StudyGroupApplicantOrderByRelationAggregateInput.schema';
import { StudyGroupStudentOrderByRelationAggregateInputObjectSchema } from './StudyGroupStudentOrderByRelationAggregateInput.schema';
import { StudyGroupAdminOrderByRelationAggregateInputObjectSchema } from './StudyGroupAdminOrderByRelationAggregateInput.schema';
import { QuestionOrderByRelationAggregateInputObjectSchema } from './QuestionOrderByRelationAggregateInput.schema';
import { ExamSheetOrderByRelationAggregateInputObjectSchema } from './ExamSheetOrderByRelationAggregateInput.schema';
import { ExamSheetItemOrderByRelationAggregateInputObjectSchema } from './ExamSheetItemOrderByRelationAggregateInput.schema';
import { AnnouncementOrderByRelationAggregateInputObjectSchema } from './AnnouncementOrderByRelationAggregateInput.schema';
import { UploadedFileOrderByRelationAggregateInputObjectSchema } from './UploadedFileOrderByRelationAggregateInput.schema';
import { ModuleItemQuestionStatusOrderByRelationAggregateInputObjectSchema } from './ModuleItemQuestionStatusOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    gender: z.lazy(() => SortOrderSchema).optional(),
    date_of_birth: z.lazy(() => SortOrderSchema).optional(),
    place_of_birth: z.lazy(() => SortOrderSchema).optional(),
    username: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    phone_number: z.lazy(() => SortOrderSchema).optional(),
    wa_number: z.lazy(() => SortOrderSchema).optional(),
    telegram_id: z.lazy(() => SortOrderSchema).optional(),
    otp: z.lazy(() => SortOrderSchema).optional(),
    otp_expired: z.lazy(() => SortOrderSchema).optional(),
    mandatory_filled: z.lazy(() => SortOrderSchema).optional(),
    suspended: z.lazy(() => SortOrderSchema).optional(),
    profile_picture: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    roles: z
      .lazy(() => UserRoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    invoices: z
      .lazy(() => InvoiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    confirmed_by_me_invoices: z
      .lazy(() => InvoiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    managed_programs: z
      .lazy(() => ProgramAdminOrderByRelationAggregateInputObjectSchema)
      .optional(),
    managed_modules: z
      .lazy(() => ModuleAdminOrderByRelationAggregateInputObjectSchema)
      .optional(),
    accessible_modules: z
      .lazy(() => ModuleAccessOrderByRelationAggregateInputObjectSchema)
      .optional(),
    module_item_status: z
      .lazy(() => ModuleItemStatusOrderByRelationAggregateInputObjectSchema)
      .optional(),
    module_item_attachment_status: z
      .lazy(
        () =>
          ModuleItemAttachmentStatusOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
    applied_groups: z
      .lazy(() => StudyGroupApplicantOrderByRelationAggregateInputObjectSchema)
      .optional(),
    enrolled_groups: z
      .lazy(() => StudyGroupStudentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    managed_groups: z
      .lazy(() => StudyGroupAdminOrderByRelationAggregateInputObjectSchema)
      .optional(),
    created_questions: z
      .lazy(() => QuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    validated_questions: z
      .lazy(() => QuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    exam_sheets: z
      .lazy(() => ExamSheetOrderByRelationAggregateInputObjectSchema)
      .optional(),
    graded_exam_sheets: z
      .lazy(() => ExamSheetOrderByRelationAggregateInputObjectSchema)
      .optional(),
    graded_exam_item: z
      .lazy(() => ExamSheetItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    created_announcements: z
      .lazy(() => AnnouncementOrderByRelationAggregateInputObjectSchema)
      .optional(),
    uploaded_files: z
      .lazy(() => UploadedFileOrderByRelationAggregateInputObjectSchema)
      .optional(),
    module_item_question_status: z
      .lazy(
        () => ModuleItemQuestionStatusOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
