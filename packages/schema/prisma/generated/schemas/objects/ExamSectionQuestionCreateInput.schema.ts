import { z } from 'zod';
import { ExamSectionCreateNestedOneWithoutQuestionsInputObjectSchema } from './ExamSectionCreateNestedOneWithoutQuestionsInput.schema';
import { QuestionCreateNestedOneWithoutExam_sectionsInputObjectSchema } from './QuestionCreateNestedOneWithoutExam_sectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionCreateInput> = z
  .object({
    section: z.lazy(
      () => ExamSectionCreateNestedOneWithoutQuestionsInputObjectSchema,
    ),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutExam_sectionsInputObjectSchema,
    ),
    min_score: z.number().optional(),
    max_scrore: z.number().optional(),
  })
  .strict();

export const ExamSectionQuestionCreateInputObjectSchema = Schema;
