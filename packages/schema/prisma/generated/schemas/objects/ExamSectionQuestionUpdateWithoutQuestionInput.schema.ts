import { z } from 'zod';
import { ExamSectionUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema } from './ExamSectionUpdateOneRequiredWithoutQuestionsNestedInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateWithoutQuestionInput> =
  z
    .object({
      section: z
        .lazy(
          () =>
            ExamSectionUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema,
        )
        .optional(),
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
    })
    .strict();

export const ExamSectionQuestionUpdateWithoutQuestionInputObjectSchema = Schema;
