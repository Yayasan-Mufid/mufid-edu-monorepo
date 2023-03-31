import { z } from 'zod';
import { InvoiceItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './InvoiceItemUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    unit_price: z.number(),
    invoice_items: z
      .lazy(
        () =>
          InvoiceItemUncheckedCreateNestedManyWithoutProductInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateInputObjectSchema = Schema;
