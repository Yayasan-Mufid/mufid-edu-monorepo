import { z } from 'zod';
import { InvoiceCreateNestedOneWithoutItemsInputObjectSchema } from './InvoiceCreateNestedOneWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    invoice: z.lazy(() => InvoiceCreateNestedOneWithoutItemsInputObjectSchema),
    name: z.string(),
    quantity: z.number(),
    unit_price: z.number(),
    discount: z.number(),
  })
  .strict();

export const InvoiceItemCreateWithoutProductInputObjectSchema = Schema;
