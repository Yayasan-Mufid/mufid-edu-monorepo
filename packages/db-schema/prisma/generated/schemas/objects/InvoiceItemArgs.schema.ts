import { z } from 'zod';
import { InvoiceItemSelectObjectSchema } from './InvoiceItemSelect.schema';
import { InvoiceItemIncludeObjectSchema } from './InvoiceItemInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemArgs> = z
  .object({
    select: z.lazy(() => InvoiceItemSelectObjectSchema).optional(),
    include: z.lazy(() => InvoiceItemIncludeObjectSchema).optional(),
  })
  .strict();

export const InvoiceItemArgsObjectSchema = Schema;
