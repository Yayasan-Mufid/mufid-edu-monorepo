import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionSumAggregateInputType> = z
  .object({
    max_score: z.literal(true).optional(),
  })
  .strict();

export const QuestionSumAggregateInputObjectSchema = Schema;
