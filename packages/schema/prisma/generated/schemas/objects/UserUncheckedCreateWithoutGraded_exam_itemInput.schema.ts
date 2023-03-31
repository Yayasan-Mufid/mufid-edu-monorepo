import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserRoleUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserRoleUncheckedCreateNestedManyWithoutUserInput.schema';
import { InvoiceUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutUserInput.schema';
import { InvoiceUncheckedCreateNestedManyWithoutConfirmed_byInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutConfirmed_byInput.schema';
import { ProgramAdminUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProgramAdminUncheckedCreateNestedManyWithoutUserInput.schema';
import { ModuleAdminUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ModuleAdminUncheckedCreateNestedManyWithoutUserInput.schema';
import { ModuleAccessUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ModuleAccessUncheckedCreateNestedManyWithoutUserInput.schema';
import { ModuleItemStatusUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ModuleItemStatusUncheckedCreateNestedManyWithoutUserInput.schema';
import { ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutUserInput.schema';
import { StudyGroupApplicantUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './StudyGroupApplicantUncheckedCreateNestedManyWithoutUserInput.schema';
import { StudyGroupStudentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './StudyGroupStudentUncheckedCreateNestedManyWithoutUserInput.schema';
import { StudyGroupAdminUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './StudyGroupAdminUncheckedCreateNestedManyWithoutUserInput.schema';
import { QuestionUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema } from './QuestionUncheckedCreateNestedManyWithoutCreated_byInput.schema';
import { QuestionUncheckedCreateNestedManyWithoutValidated_byInputObjectSchema } from './QuestionUncheckedCreateNestedManyWithoutValidated_byInput.schema';
import { ExamSheetUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ExamSheetUncheckedCreateNestedManyWithoutUserInput.schema';
import { ExamSheetUncheckedCreateNestedManyWithoutGraderInputObjectSchema } from './ExamSheetUncheckedCreateNestedManyWithoutGraderInput.schema';
import { AnnouncementUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema } from './AnnouncementUncheckedCreateNestedManyWithoutCreated_byInput.schema';
import { UploadedFileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema } from './UploadedFileUncheckedCreateNestedManyWithoutUploaderInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutGraded_exam_itemInput> =
  z
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
        .lazy(
          () => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      sessions: z
        .lazy(
          () => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      roles: z
        .lazy(
          () => UserRoleUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      invoices: z
        .lazy(
          () => InvoiceUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      confirmed_by_me_invoices: z
        .lazy(
          () =>
            InvoiceUncheckedCreateNestedManyWithoutConfirmed_byInputObjectSchema,
        )
        .optional(),
      managed_programs: z
        .lazy(
          () =>
            ProgramAdminUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      managed_modules: z
        .lazy(
          () =>
            ModuleAdminUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      accessible_modules: z
        .lazy(
          () =>
            ModuleAccessUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      module_item_status: z
        .lazy(
          () =>
            ModuleItemStatusUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      module_item_attachment_status: z
        .lazy(
          () =>
            ModuleItemAttachmentStatusUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      applied_groups: z
        .lazy(
          () =>
            StudyGroupApplicantUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      enrolled_groups: z
        .lazy(
          () =>
            StudyGroupStudentUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      managed_groups: z
        .lazy(
          () =>
            StudyGroupAdminUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      created_questions: z
        .lazy(
          () =>
            QuestionUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema,
        )
        .optional(),
      validated_questions: z
        .lazy(
          () =>
            QuestionUncheckedCreateNestedManyWithoutValidated_byInputObjectSchema,
        )
        .optional(),
      exam_sheets: z
        .lazy(
          () => ExamSheetUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
      graded_exam_sheets: z
        .lazy(
          () =>
            ExamSheetUncheckedCreateNestedManyWithoutGraderInputObjectSchema,
        )
        .optional(),
      created_announcements: z
        .lazy(
          () =>
            AnnouncementUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema,
        )
        .optional(),
      uploaded_files: z
        .lazy(
          () =>
            UploadedFileUncheckedCreateNestedManyWithoutUploaderInputObjectSchema,
        )
        .optional(),
      module_item_question_status: z
        .lazy(
          () =>
            ModuleItemQuestionStatusUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutGraded_exam_itemInputObjectSchema =
  Schema;
