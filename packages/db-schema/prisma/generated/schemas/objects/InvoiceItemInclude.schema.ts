import { z } from 'zod';
import { InvoiceArgsObjectSchema } from './InvoiceArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemInclude> = z
  .object({
    invoice: z
      .union([z.boolean(), z.lazy(() => InvoiceArgsObjectSchema)])
      .optional(),
    product: z
      .union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const InvoiceItemIncludeObjectSchema = Schema;
