import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    code: z.literal(true).optional(),
    module_id: z.literal(true).optional(),
    rules: z.literal(true).optional(),
  })
  .strict();

export const ExamMinAggregateInputObjectSchema = Schema;
