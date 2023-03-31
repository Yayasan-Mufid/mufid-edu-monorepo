import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemAvgAggregateInputType> = z
  .object({
    quantity: z.literal(true).optional(),
    unit_price: z.literal(true).optional(),
    discount: z.literal(true).optional(),
  })
  .strict();

export const InvoiceItemAvgAggregateInputObjectSchema = Schema;
