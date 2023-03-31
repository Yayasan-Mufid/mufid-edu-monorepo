import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ModuleUncheckedUpdateManyWithoutProgramNestedInputObjectSchema } from './ModuleUncheckedUpdateManyWithoutProgramNestedInput.schema';
import { QuestionUncheckedUpdateManyWithoutProgramNestedInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutProgramNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUncheckedUpdateWithoutAdminsInput> = z
  .object({
    id: z
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
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
    published: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    modules: z
      .lazy(
        () => ModuleUncheckedUpdateManyWithoutProgramNestedInputObjectSchema,
      )
      .optional(),
    questions: z
      .lazy(
        () => QuestionUncheckedUpdateManyWithoutProgramNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProgramUncheckedUpdateWithoutAdminsInputObjectSchema = Schema;
