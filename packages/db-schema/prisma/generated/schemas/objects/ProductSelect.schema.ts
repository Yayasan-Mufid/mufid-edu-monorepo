import { z } from 'zod';
import { InvoiceItemFindManySchema } from '../findManyInvoiceItem.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    unit_price: z.boolean().optional(),
    invoice_items: z
      .union([z.boolean(), z.lazy(() => InvoiceItemFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ProductCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductSelectObjectSchema = Schema;
