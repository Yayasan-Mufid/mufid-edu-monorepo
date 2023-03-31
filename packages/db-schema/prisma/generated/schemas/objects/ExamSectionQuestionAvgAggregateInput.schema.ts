import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSectionQuestionAvgAggregateInputType> = z
  .object({
    min_score: z.literal(true).optional(),
    max_scrore: z.literal(true).optional(),
  })
  .strict();

export const ExamSectionQuestionAvgAggregateInputObjectSchema = Schema;
