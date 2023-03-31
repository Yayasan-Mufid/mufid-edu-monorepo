import { z } from 'zod';
import { InvoiceArgsObjectSchema } from './InvoiceArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemSelect> = z
  .object({
    id: z.boolean().optional(),
    invoice_id: z.boolean().optional(),
    invoice: z
      .union([z.boolean(), z.lazy(() => InvoiceArgsObjectSchema)])
      .optional(),
    name: z.boolean().optional(),
    quantity: z.boolean().optional(),
    unit_price: z.boolean().optional(),
    discount: z.boolean().optional(),
    product_id: z.boolean().optional(),
    product: z
      .union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const InvoiceItemSelectObjectSchema = Schema;
