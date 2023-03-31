import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupSumAggregateInputType> = z
  .object({
    capacity: z.literal(true).optional(),
    invoice_amount: z.literal(true).optional(),
  })
  .strict();

export const StudyGroupSumAggregateInputObjectSchema = Schema;
