import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ExamSectionQuestionUncheckedUpdateManyWithoutSectionNestedInputObjectSchema } from './ExamSectionQuestionUncheckedUpdateManyWithoutSectionNestedInput.schema';
import { ExamSheetSectionUncheckedUpdateManyWithoutSectionNestedInputObjectSchema } from './ExamSheetSectionUncheckedUpdateManyWithoutSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    exam_id: z
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
    text: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    randomize_questions: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    nb_of_questions: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    seq: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    default_point: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    weight: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    questions: z
      .lazy(
        () =>
          ExamSectionQuestionUncheckedUpdateManyWithoutSectionNestedInputObjectSchema,
      )
      .optional(),
    sheet_sections: z
      .lazy(
        () =>
          ExamSheetSectionUncheckedUpdateManyWithoutSectionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamSectionUncheckedUpdateInputObjectSchema = Schema;
