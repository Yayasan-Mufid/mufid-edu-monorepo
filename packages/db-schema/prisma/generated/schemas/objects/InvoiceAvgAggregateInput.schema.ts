import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceAvgAggregateInputType> = z
  .object({
    amount: z.literal(true).optional(),
    paid_amount: z.literal(true).optional(),
    mismatch: z.literal(true).optional(),
  })
  .strict();

export const InvoiceAvgAggregateInputObjectSchema = Schema;
