import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserRoleUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserRoleUncheckedUpdateManyWithoutUserNestedInput.schema';
import { InvoiceUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutUserNestedInput.schema';
import { InvoiceUncheckedUpdateManyWithoutConfirmed_byNestedInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutConfirmed_byNestedInput.schema';
import { ProgramAdminUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ProgramAdminUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ModuleAdminUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ModuleAdminUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ModuleAccessUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ModuleAccessUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ModuleItemStatusUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ModuleItemStatusUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ModuleItemAttachmentStatusUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ModuleItemAttachmentStatusUncheckedUpdateManyWithoutUserNestedInput.schema';
import { StudyGroupApplicantUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateManyWithoutUserNestedInput.schema';
import { StudyGroupStudentUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './StudyGroupStudentUncheckedUpdateManyWithoutUserNestedInput.schema';
import { StudyGroupAdminUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './StudyGroupAdminUncheckedUpdateManyWithoutUserNestedInput.schema';
import { QuestionUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutCreated_byNestedInput.schema';
import { ExamSheetUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ExamSheetUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ExamSheetUncheckedUpdateManyWithoutGraderNestedInputObjectSchema } from './ExamSheetUncheckedUpdateManyWithoutGraderNestedInput.schema';
import { ExamSheetItemUncheckedUpdateManyWithoutGraded_byNestedInputObjectSchema } from './ExamSheetItemUncheckedUpdateManyWithoutGraded_byNestedInput.schema';
import { AnnouncementUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema } from './AnnouncementUncheckedUpdateManyWithoutCreated_byNestedInput.schema';
import { UploadedFileUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema } from './UploadedFileUncheckedUpdateManyWithoutUploaderNestedInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ModuleItemQuestionStatusUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutValidated_questionsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      date_of_birth: z
        .union([
          z.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      place_of_birth: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      emailVerified: z
        .union([
          z.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      address: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      phone_number: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      wa_number: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      telegram_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      otp: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      otp_expired: z
        .union([
          z.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      mandatory_filled: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      suspended: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      accounts: z
        .lazy(
          () => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      sessions: z
        .lazy(
          () => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      roles: z
        .lazy(
          () => UserRoleUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      invoices: z
        .lazy(
          () => InvoiceUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      confirmed_by_me_invoices: z
        .lazy(
          () =>
            InvoiceUncheckedUpdateManyWithoutConfirmed_byNestedInputObjectSchema,
        )
        .optional(),
      managed_programs: z
        .lazy(
          () =>
            ProgramAdminUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      managed_modules: z
        .lazy(
          () =>
            ModuleAdminUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      accessible_modules: z
        .lazy(
          () =>
            ModuleAccessUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      module_item_status: z
        .lazy(
          () =>
            ModuleItemStatusUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      module_item_attachment_status: z
        .lazy(
          () =>
            ModuleItemAttachmentStatusUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      applied_groups: z
        .lazy(
          () =>
            StudyGroupApplicantUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      enrolled_groups: z
        .lazy(
          () =>
            StudyGroupStudentUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      managed_groups: z
        .lazy(
          () =>
            StudyGroupAdminUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      created_questions: z
        .lazy(
          () =>
            QuestionUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema,
        )
        .optional(),
      exam_sheets: z
        .lazy(
          () => ExamSheetUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      graded_exam_sheets: z
        .lazy(
          () =>
            ExamSheetUncheckedUpdateManyWithoutGraderNestedInputObjectSchema,
        )
        .optional(),
      graded_exam_item: z
        .lazy(
          () =>
            ExamSheetItemUncheckedUpdateManyWithoutGraded_byNestedInputObjectSchema,
        )
        .optional(),
      created_announcements: z
        .lazy(
          () =>
            AnnouncementUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema,
        )
        .optional(),
      uploaded_files: z
        .lazy(
          () =>
            UploadedFileUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema,
        )
        .optional(),
      module_item_question_status: z
        .lazy(
          () =>
            ModuleItemQuestionStatusUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutValidated_questionsInputObjectSchema =
  Schema;
