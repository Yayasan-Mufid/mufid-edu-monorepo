import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    exam_id: z.literal(true).optional(),
    group_id: z.literal(true).optional(),
    start_time: z.literal(true).optional(),
    end_time: z.literal(true).optional(),
    duration_hour: z.literal(true).optional(),
    weight: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const StudyGroupExamCountAggregateInputObjectSchema = Schema;
