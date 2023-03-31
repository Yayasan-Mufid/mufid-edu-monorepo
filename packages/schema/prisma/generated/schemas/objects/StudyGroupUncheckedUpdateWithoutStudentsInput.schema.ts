import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StudyGroupAdminUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema } from './StudyGroupAdminUncheckedUpdateManyWithoutStudy_groupNestedInput.schema';
import { StudyGroupScheduleUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema } from './StudyGroupScheduleUncheckedUpdateManyWithoutStudy_groupNestedInput.schema';
import { StudyGroupApplicantUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema } from './StudyGroupApplicantUncheckedUpdateManyWithoutStudy_groupNestedInput.schema';
import { StudyGroupExamUncheckedUpdateManyWithoutGroupNestedInputObjectSchema } from './StudyGroupExamUncheckedUpdateManyWithoutGroupNestedInput.schema';
import { StudyGroupAnnouncementUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema } from './StudyGroupAnnouncementUncheckedUpdateManyWithoutStudy_groupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUncheckedUpdateWithoutStudentsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      code: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      module_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      capacity: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      enrollment_start: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      enrollment_end: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      active_start: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      active_end: z
        .union([
          z.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      logo_url: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      invoice_amount: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      invoice_title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      invoice_account_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      use_schedule: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      application_note: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      admins: z
        .lazy(
          () =>
            StudyGroupAdminUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema,
        )
        .optional(),
      schedule: z
        .lazy(
          () =>
            StudyGroupScheduleUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema,
        )
        .optional(),
      applicants: z
        .lazy(
          () =>
            StudyGroupApplicantUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema,
        )
        .optional(),
      exams: z
        .lazy(
          () =>
            StudyGroupExamUncheckedUpdateManyWithoutGroupNestedInputObjectSchema,
        )
        .optional(),
      announcements: z
        .lazy(
          () =>
            StudyGroupAnnouncementUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const StudyGroupUncheckedUpdateWithoutStudentsInputObjectSchema = Schema;
