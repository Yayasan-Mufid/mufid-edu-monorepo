import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z
  .object({
    invoice_items: z.boolean().optional(),
  })
  .strict();

export const ProductCountOutputTypeSelectObjectSchema = Schema;
