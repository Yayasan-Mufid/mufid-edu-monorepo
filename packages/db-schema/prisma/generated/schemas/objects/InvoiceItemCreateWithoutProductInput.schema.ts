import { z } from 'zod';
import { InvoiceCreateNestedOneWithoutItemsInputObjectSchema } from './InvoiceCreateNestedOneWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    quantity: z.number(),
    unit_price: z.number(),
    discount: z.number(),
    invoice: z.lazy(() => InvoiceCreateNestedOneWithoutItemsInputObjectSchema),
  })
  .strict();

export const InvoiceItemCreateWithoutProductInputObjectSchema = Schema;
