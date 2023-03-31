import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamAvgAggregateInputType> = z
  .object({
    duration_hour: z.literal(true).optional(),
    weight: z.literal(true).optional(),
  })
  .strict();

export const StudyGroupExamAvgAggregateInputObjectSchema = Schema;
