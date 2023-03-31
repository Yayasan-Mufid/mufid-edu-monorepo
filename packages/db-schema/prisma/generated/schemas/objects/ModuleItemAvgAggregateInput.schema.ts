import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemAvgAggregateInputType> = z
  .object({
    seq: z.literal(true).optional(),
  })
  .strict();

export const ModuleItemAvgAggregateInputObjectSchema = Schema;
