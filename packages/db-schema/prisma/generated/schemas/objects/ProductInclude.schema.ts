import { z } from 'zod';
import { InvoiceItemFindManySchema } from '../findManyInvoiceItem.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductInclude> = z
  .object({
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

export const ProductIncludeObjectSchema = Schema;
