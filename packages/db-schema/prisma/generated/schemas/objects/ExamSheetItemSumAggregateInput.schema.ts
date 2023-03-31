import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetItemSumAggregateInputType> = z
  .object({
    score: z.literal(true).optional(),
    seq: z.literal(true).optional(),
  })
  .strict();

export const ExamSheetItemSumAggregateInputObjectSchema = Schema;
