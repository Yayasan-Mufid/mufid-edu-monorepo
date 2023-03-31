import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ModuleUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema } from './ModuleUpdateOneRequiredWithoutStudy_groupsNestedInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PaymentAccountUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema } from './PaymentAccountUpdateOneRequiredWithoutStudy_groupsNestedInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StudyGroupAdminUpdateManyWithoutStudy_groupNestedInputObjectSchema } from './StudyGroupAdminUpdateManyWithoutStudy_groupNestedInput.schema';
import { StudyGroupScheduleUpdateManyWithoutStudy_groupNestedInputObjectSchema } from './StudyGroupScheduleUpdateManyWithoutStudy_groupNestedInput.schema';
import { StudyGroupApplicantUpdateManyWithoutStudy_groupNestedInputObjectSchema } from './StudyGroupApplicantUpdateManyWithoutStudy_groupNestedInput.schema';
import { StudyGroupExamUpdateManyWithoutGroupNestedInputObjectSchema } from './StudyGroupExamUpdateManyWithoutGroupNestedInput.schema';
import { StudyGroupAnnouncementUpdateManyWithoutStudy_groupNestedInputObjectSchema } from './StudyGroupAnnouncementUpdateManyWithoutStudy_groupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateWithoutStudentsInput> = z
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
    module: z
      .lazy(
        () => ModuleUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema,
      )
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
    invoice_account: z
      .lazy(
        () =>
          PaymentAccountUpdateOneRequiredWithoutStudy_groupsNestedInputObjectSchema,
      )
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
          StudyGroupAdminUpdateManyWithoutStudy_groupNestedInputObjectSchema,
      )
      .optional(),
    schedule: z
      .lazy(
        () =>
          StudyGroupScheduleUpdateManyWithoutStudy_groupNestedInputObjectSchema,
      )
      .optional(),
    applicants: z
      .lazy(
        () =>
          StudyGroupApplicantUpdateManyWithoutStudy_groupNestedInputObjectSchema,
      )
      .optional(),
    exams: z
      .lazy(() => StudyGroupExamUpdateManyWithoutGroupNestedInputObjectSchema)
      .optional(),
    announcements: z
      .lazy(
        () =>
          StudyGroupAnnouncementUpdateManyWithoutStudy_groupNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupUpdateWithoutStudentsInputObjectSchema = Schema;
