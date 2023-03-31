import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { QuestionUpdateOneRequiredWithoutExam_sectionsNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutExam_sectionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateWithoutSectionInput> = z
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
    question: z
      .lazy(
        () =>
          QuestionUpdateOneRequiredWithoutExam_sectionsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ExamSectionQuestionUpdateWithoutSectionInputObjectSchema = Schema;
