import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ModuleAdminUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './ModuleAdminUncheckedUpdateManyWithoutModuleNestedInput.schema';
import { ModuleItemUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './ModuleItemUncheckedUpdateManyWithoutModuleNestedInput.schema';
import { ModuleAccessUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './ModuleAccessUncheckedUpdateManyWithoutModuleNestedInput.schema';
import { StudyGroupUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './StudyGroupUncheckedUpdateManyWithoutModuleNestedInput.schema';
import { ExamUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './ExamUncheckedUpdateManyWithoutModuleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUncheckedUpdateWithoutQuestionsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    program_id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
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
    slug: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    published: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    archived: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    seq: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    cover_img_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    bg_img_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    admins: z
      .lazy(
        () =>
          ModuleAdminUncheckedUpdateManyWithoutModuleNestedInputObjectSchema,
      )
      .optional(),
    items: z
      .lazy(
        () => ModuleItemUncheckedUpdateManyWithoutModuleNestedInputObjectSchema,
      )
      .optional(),
    students: z
      .lazy(
        () =>
          ModuleAccessUncheckedUpdateManyWithoutModuleNestedInputObjectSchema,
      )
      .optional(),
    study_groups: z
      .lazy(
        () => StudyGroupUncheckedUpdateManyWithoutModuleNestedInputObjectSchema,
      )
      .optional(),
    exams: z
      .lazy(() => ExamUncheckedUpdateManyWithoutModuleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleUncheckedUpdateWithoutQuestionsInputObjectSchema = Schema;
