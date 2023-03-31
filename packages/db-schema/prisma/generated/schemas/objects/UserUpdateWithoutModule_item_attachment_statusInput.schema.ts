import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { UserRoleUpdateManyWithoutUserNestedInputObjectSchema } from './UserRoleUpdateManyWithoutUserNestedInput.schema';
import { InvoiceUpdateManyWithoutUserNestedInputObjectSchema } from './InvoiceUpdateManyWithoutUserNestedInput.schema';
import { InvoiceUpdateManyWithoutConfirmed_byNestedInputObjectSchema } from './InvoiceUpdateManyWithoutConfirmed_byNestedInput.schema';
import { ProgramAdminUpdateManyWithoutUserNestedInputObjectSchema } from './ProgramAdminUpdateManyWithoutUserNestedInput.schema';
import { ModuleAdminUpdateManyWithoutUserNestedInputObjectSchema } from './ModuleAdminUpdateManyWithoutUserNestedInput.schema';
import { ModuleAccessUpdateManyWithoutUserNestedInputObjectSchema } from './ModuleAccessUpdateManyWithoutUserNestedInput.schema';
import { ModuleItemStatusUpdateManyWithoutUserNestedInputObjectSchema } from './ModuleItemStatusUpdateManyWithoutUserNestedInput.schema';
import { StudyGroupApplicantUpdateManyWithoutUserNestedInputObjectSchema } from './StudyGroupApplicantUpdateManyWithoutUserNestedInput.schema';
import { StudyGroupStudentUpdateManyWithoutUserNestedInputObjectSchema } from './StudyGroupStudentUpdateManyWithoutUserNestedInput.schema';
import { StudyGroupAdminUpdateManyWithoutUserNestedInputObjectSchema } from './StudyGroupAdminUpdateManyWithoutUserNestedInput.schema';
import { QuestionUpdateManyWithoutCreated_byNestedInputObjectSchema } from './QuestionUpdateManyWithoutCreated_byNestedInput.schema';
import { QuestionUpdateManyWithoutValidated_byNestedInputObjectSchema } from './QuestionUpdateManyWithoutValidated_byNestedInput.schema';
import { ExamSheetUpdateManyWithoutUserNestedInputObjectSchema } from './ExamSheetUpdateManyWithoutUserNestedInput.schema';
import { ExamSheetUpdateManyWithoutGraderNestedInputObjectSchema } from './ExamSheetUpdateManyWithoutGraderNestedInput.schema';
import { ExamSheetItemUpdateManyWithoutGraded_byNestedInputObjectSchema } from './ExamSheetItemUpdateManyWithoutGraded_byNestedInput.schema';
import { AnnouncementUpdateManyWithoutCreated_byNestedInputObjectSchema } from './AnnouncementUpdateManyWithoutCreated_byNestedInput.schema';
import { UploadedFileUpdateManyWithoutUploaderNestedInputObjectSchema } from './UploadedFileUpdateManyWithoutUploaderNestedInput.schema';
import { ModuleItemQuestionStatusUpdateManyWithoutUserNestedInputObjectSchema } from './ModuleItemQuestionStatusUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutModule_item_attachment_statusInput> =
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
        .lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema)
        .optional(),
      roles: z
        .lazy(() => UserRoleUpdateManyWithoutUserNestedInputObjectSchema)
        .optional(),
      invoices: z
        .lazy(() => InvoiceUpdateManyWithoutUserNestedInputObjectSchema)
        .optional(),
      confirmed_by_me_invoices: z
        .lazy(() => InvoiceUpdateManyWithoutConfirmed_byNestedInputObjectSchema)
        .optional(),
      managed_programs: z
        .lazy(() => ProgramAdminUpdateManyWithoutUserNestedInputObjectSchema)
        .optional(),
      managed_modules: z
        .lazy(() => ModuleAdminUpdateManyWithoutUserNestedInputObjectSchema)
        .optional(),
      accessible_modules: z
        .lazy(() => ModuleAccessUpdateManyWithoutUserNestedInputObjectSchema)
        .optional(),
      module_item_status: z
        .lazy(
          () => ModuleItemStatusUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      applied_groups: z
        .lazy(
          () => StudyGroupApplicantUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      enrolled_groups: z
        .lazy(
          () => StudyGroupStudentUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      managed_groups: z
        .lazy(() => StudyGroupAdminUpdateManyWithoutUserNestedInputObjectSchema)
        .optional(),
      created_questions: z
        .lazy(() => QuestionUpdateManyWithoutCreated_byNestedInputObjectSchema)
        .optional(),
      validated_questions: z
        .lazy(
          () => QuestionUpdateManyWithoutValidated_byNestedInputObjectSchema,
        )
        .optional(),
      exam_sheets: z
        .lazy(() => ExamSheetUpdateManyWithoutUserNestedInputObjectSchema)
        .optional(),
      graded_exam_sheets: z
        .lazy(() => ExamSheetUpdateManyWithoutGraderNestedInputObjectSchema)
        .optional(),
      graded_exam_item: z
        .lazy(
          () => ExamSheetItemUpdateManyWithoutGraded_byNestedInputObjectSchema,
        )
        .optional(),
      created_announcements: z
        .lazy(
          () => AnnouncementUpdateManyWithoutCreated_byNestedInputObjectSchema,
        )
        .optional(),
      uploaded_files: z
        .lazy(
          () => UploadedFileUpdateManyWithoutUploaderNestedInputObjectSchema,
        )
        .optional(),
      module_item_question_status: z
        .lazy(
          () =>
            ModuleItemQuestionStatusUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUpdateWithoutModule_item_attachment_statusInputObjectSchema =
  Schema;
