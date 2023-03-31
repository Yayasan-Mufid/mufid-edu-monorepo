import { z } from 'zod';
import { QuestionCreateNestedOneWithoutExam_sectionsInputObjectSchema } from './QuestionCreateNestedOneWithoutExam_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateWithoutSectionInput> = z
  .object({
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutExam_sectionsInputObjectSchema,
    ),
    min_score: z.number().optional(),
    max_scrore: z.number().optional(),
  })
  .strict();

export const ExamSectionQuestionCreateWithoutSectionInputObjectSchema = Schema;
