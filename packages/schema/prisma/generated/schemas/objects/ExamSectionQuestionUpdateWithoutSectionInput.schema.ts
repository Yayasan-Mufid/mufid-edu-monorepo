import { z } from 'zod';
import { QuestionUpdateOneRequiredWithoutExam_sectionsNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutExam_sectionsNestedInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateWithoutSectionInput> = z
  .object({
    question: z
      .lazy(
        () =>
          QuestionUpdateOneRequiredWithoutExam_sectionsNestedInputObjectSchema,
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

export const ExamSectionQuestionUpdateWithoutSectionInputObjectSchema = Schema;
