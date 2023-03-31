import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateManyInvoiceInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    quantity: z.number(),
    unit_price: z.number(),
    discount: z.number(),
    product_id: z.string(),
  })
  .strict();

export const InvoiceItemCreateManyInvoiceInputObjectSchema = Schema;
