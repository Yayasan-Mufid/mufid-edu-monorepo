import { z } from 'zod';
import { InvoiceSelectObjectSchema } from './InvoiceSelect.schema';
import { InvoiceIncludeObjectSchema } from './InvoiceInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceArgs> = z
  .object({
    select: z.lazy(() => InvoiceSelectObjectSchema).optional(),
    include: z.lazy(() => InvoiceIncludeObjectSchema).optional(),
  })
  .strict();

export const InvoiceArgsObjectSchema = Schema;
