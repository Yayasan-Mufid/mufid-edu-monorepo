import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceCountOutputTypeSelect> = z
  .object({
    items: z.boolean().optional(),
  })
  .strict();

export const InvoiceCountOutputTypeSelectObjectSchema = Schema;
