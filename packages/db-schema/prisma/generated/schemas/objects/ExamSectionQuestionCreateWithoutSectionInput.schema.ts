import { z } from 'zod';
import { QuestionCreateNestedOneWithoutExam_sectionsInputObjectSchema } from './QuestionCreateNestedOneWithoutExam_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateWithoutSectionInput> = z
  .object({
    min_score: z.number().optional(),
    max_scrore: z.number().optional(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutExam_sectionsInputObjectSchema,
    ),
  })
  .strict();

export const ExamSectionQuestionCreateWithoutSectionInputObjectSchema = Schema;
