import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    invoice_id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    unit_price: z.literal(true).optional(),
    discount: z.literal(true).optional(),
    product_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const InvoiceItemCountAggregateInputObjectSchema = Schema;
