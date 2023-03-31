import { z } from 'zod';
import { InvoiceCountOutputTypeSelectObjectSchema } from './InvoiceCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => InvoiceCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const InvoiceCountOutputTypeArgsObjectSchema = Schema;
