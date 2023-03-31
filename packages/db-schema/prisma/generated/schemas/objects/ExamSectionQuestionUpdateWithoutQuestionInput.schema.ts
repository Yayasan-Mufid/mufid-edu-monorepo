import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ExamSectionUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema } from './ExamSectionUpdateOneRequiredWithoutQuestionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateWithoutQuestionInput> =
  z
    .object({
      min_score: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      max_scrore: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      section: z
        .lazy(
          () =>
            ExamSectionUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ExamSectionQuestionUpdateWithoutQuestionInputObjectSchema = Schema;
