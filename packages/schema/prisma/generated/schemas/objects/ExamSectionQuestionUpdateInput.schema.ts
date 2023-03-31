import { z } from 'zod';
import { ExamSectionUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema } from './ExamSectionUpdateOneRequiredWithoutQuestionsNestedInput.schema';
import { QuestionUpdateOneRequiredWithoutExam_sectionsNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutExam_sectionsNestedInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionUpdateInput> = z
  .object({
    section: z
      .lazy(
        () =>
          ExamSectionUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema,
      )
      .optional(),
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

export const ExamSectionQuestionUpdateInputObjectSchema = Schema;
