import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { UserRoleCreateNestedManyWithoutUserInputObjectSchema } from './UserRoleCreateNestedManyWithoutUserInput.schema';
import { InvoiceCreateNestedManyWithoutUserInputObjectSchema } from './InvoiceCreateNestedManyWithoutUserInput.schema';
import { InvoiceCreateNestedManyWithoutConfirmed_byInputObjectSchema } from './InvoiceCreateNestedManyWithoutConfirmed_byInput.schema';
import { ProgramAdminCreateNestedManyWithoutUserInputObjectSchema } from './ProgramAdminCreateNestedManyWithoutUserInput.schema';
import { ModuleAdminCreateNestedManyWithoutUserInputObjectSchema } from './ModuleAdminCreateNestedManyWithoutUserInput.schema';
import { ModuleAccessCreateNestedManyWithoutUserInputObjectSchema } from './ModuleAccessCreateNestedManyWithoutUserInput.schema';
import { ModuleItemStatusCreateNestedManyWithoutUserInputObjectSchema } from './ModuleItemStatusCreateNestedManyWithoutUserInput.schema';
import { ModuleItemAttachmentStatusCreateNestedManyWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusCreateNestedManyWithoutUserInput.schema';
import { StudyGroupApplicantCreateNestedManyWithoutUserInputObjectSchema } from './StudyGroupApplicantCreateNestedManyWithoutUserInput.schema';
import { StudyGroupStudentCreateNestedManyWithoutUserInputObjectSchema } from './StudyGroupStudentCreateNestedManyWithoutUserInput.schema';
import { StudyGroupAdminCreateNestedManyWithoutUserInputObjectSchema } from './StudyGroupAdminCreateNestedManyWithoutUserInput.schema';
import { QuestionCreateNestedManyWithoutCreated_byInputObjectSchema } from './QuestionCreateNestedManyWithoutCreated_byInput.schema';
import { QuestionCreateNestedManyWithoutValidated_byInputObjectSchema } from './QuestionCreateNestedManyWithoutValidated_byInput.schema';
import { ExamSheetCreateNestedManyWithoutUserInputObjectSchema } from './ExamSheetCreateNestedManyWithoutUserInput.schema';
import { ExamSheetCreateNestedManyWithoutGraderInputObjectSchema } from './ExamSheetCreateNestedManyWithoutGraderInput.schema';
import { ExamSheetItemCreateNestedManyWithoutGraded_byInputObjectSchema } from './ExamSheetItemCreateNestedManyWithoutGraded_byInput.schema';
import { AnnouncementCreateNestedManyWithoutCreated_byInputObjectSchema } from './AnnouncementCreateNestedManyWithoutCreated_byInput.schema';
import { UploadedFileCreateNestedManyWithoutUploaderInputObjectSchema } from './UploadedFileCreateNestedManyWithoutUploaderInput.schema';
import { ModuleItemQuestionStatusCreateNestedManyWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
    date_of_birth: z.date().optional().nullable(),
    place_of_birth: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    phone_number: z.string().optional().nullable(),
    wa_number: z.string().optional().nullable(),
    telegram_id: z.string().optional().nullable(),
    otp: z.string().optional().nullable(),
    otp_expired: z.date().optional().nullable(),
    mandatory_filled: z.boolean().optional(),
    suspended: z.boolean().optional(),
    profile_picture: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    roles: z
      .lazy(() => UserRoleCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    invoices: z
      .lazy(() => InvoiceCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    confirmed_by_me_invoices: z
      .lazy(() => InvoiceCreateNestedManyWithoutConfirmed_byInputObjectSchema)
      .optional(),
    managed_programs: z
      .lazy(() => ProgramAdminCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    managed_modules: z
      .lazy(() => ModuleAdminCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    accessible_modules: z
      .lazy(() => ModuleAccessCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    module_item_status: z
      .lazy(() => ModuleItemStatusCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    module_item_attachment_status: z
      .lazy(
        () =>
          ModuleItemAttachmentStatusCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    applied_groups: z
      .lazy(
        () => StudyGroupApplicantCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    enrolled_groups: z
      .lazy(() => StudyGroupStudentCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    managed_groups: z
      .lazy(() => StudyGroupAdminCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    created_questions: z
      .lazy(() => QuestionCreateNestedManyWithoutCreated_byInputObjectSchema)
      .optional(),
    validated_questions: z
      .lazy(() => QuestionCreateNestedManyWithoutValidated_byInputObjectSchema)
      .optional(),
    exam_sheets: z
      .lazy(() => ExamSheetCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    graded_exam_sheets: z
      .lazy(() => ExamSheetCreateNestedManyWithoutGraderInputObjectSchema)
      .optional(),
    graded_exam_item: z
      .lazy(
        () => ExamSheetItemCreateNestedManyWithoutGraded_byInputObjectSchema,
      )
      .optional(),
    created_announcements: z
      .lazy(
        () => AnnouncementCreateNestedManyWithoutCreated_byInputObjectSchema,
      )
      .optional(),
    uploaded_files: z
      .lazy(() => UploadedFileCreateNestedManyWithoutUploaderInputObjectSchema)
      .optional(),
    module_item_question_status: z
      .lazy(
        () =>
          ModuleItemQuestionStatusCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
