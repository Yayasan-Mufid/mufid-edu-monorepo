import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetSumAggregateInputType> = z
  .object({
    score: z.literal(true).optional(),
  })
  .strict();

export const ExamSheetSumAggregateInputObjectSchema = Schema;
