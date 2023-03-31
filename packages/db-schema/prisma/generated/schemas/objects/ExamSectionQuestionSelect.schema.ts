import { z } from 'zod';
import { ExamSectionArgsObjectSchema } from './ExamSectionArgs.schema';
import { QuestionArgsObjectSchema } from './QuestionArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionSelect> = z
  .object({
    section_id: z.boolean().optional(),
    section: z
      .union([z.boolean(), z.lazy(() => ExamSectionArgsObjectSchema)])
      .optional(),
    question_id: z.boolean().optional(),
    question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
    min_score: z.boolean().optional(),
    max_scrore: z.boolean().optional(),
  })
  .strict();

export const ExamSectionQuestionSelectObjectSchema = Schema;
