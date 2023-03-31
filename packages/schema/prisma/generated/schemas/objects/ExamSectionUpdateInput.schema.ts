import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExamUpdateOneRequiredWithoutSectionsNestedInputObjectSchema } from './ExamUpdateOneRequiredWithoutSectionsNestedInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ExamSectionQuestionUpdateManyWithoutSectionNestedInputObjectSchema } from './ExamSectionQuestionUpdateManyWithoutSectionNestedInput.schema';
import { ExamSheetSectionUpdateManyWithoutSectionNestedInputObjectSchema } from './ExamSheetSectionUpdateManyWithoutSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    exam: z
      .lazy(() => ExamUpdateOneRequiredWithoutSectionsNestedInputObjectSchema)
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
          ExamSectionQuestionUpdateManyWithoutSectionNestedInputObjectSchema,
      )
      .optional(),
    sheet_sections: z
      .lazy(
        () => ExamSheetSectionUpdateManyWithoutSectionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamSectionUpdateInputObjectSchema = Schema;
