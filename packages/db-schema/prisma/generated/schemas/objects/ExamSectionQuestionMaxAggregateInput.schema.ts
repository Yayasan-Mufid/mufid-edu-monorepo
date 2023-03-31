import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionMaxAggregateInputType> = z
  .object({
    section_id: z.literal(true).optional(),
    question_id: z.literal(true).optional(),
    min_score: z.literal(true).optional(),
    max_scrore: z.literal(true).optional(),
  })
  .strict();

export const ExamSectionQuestionMaxAggregateInputObjectSchema = Schema;
