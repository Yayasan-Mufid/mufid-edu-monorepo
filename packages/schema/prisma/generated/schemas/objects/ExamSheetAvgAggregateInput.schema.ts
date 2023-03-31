import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetAvgAggregateInputType> = z
  .object({
    score: z.literal(true).optional(),
  })
  .strict();

export const ExamSheetAvgAggregateInputObjectSchema = Schema;
