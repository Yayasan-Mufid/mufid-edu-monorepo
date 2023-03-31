import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ModuleItemUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './ModuleItemUncheckedUpdateManyWithoutModuleNestedInput.schema';
import { ModuleAccessUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './ModuleAccessUncheckedUpdateManyWithoutModuleNestedInput.schema';
import { StudyGroupUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './StudyGroupUncheckedUpdateManyWithoutModuleNestedInput.schema';
import { QuestionUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutModuleNestedInput.schema';
import { ExamUncheckedUpdateManyWithoutModuleNestedInputObjectSchema } from './ExamUncheckedUpdateManyWithoutModuleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUncheckedUpdateWithoutAdminsInput> = z
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
    questions: z
      .lazy(
        () => QuestionUncheckedUpdateManyWithoutModuleNestedInputObjectSchema,
      )
      .optional(),
    exams: z
      .lazy(() => ExamUncheckedUpdateManyWithoutModuleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleUncheckedUpdateWithoutAdminsInputObjectSchema = Schema;
