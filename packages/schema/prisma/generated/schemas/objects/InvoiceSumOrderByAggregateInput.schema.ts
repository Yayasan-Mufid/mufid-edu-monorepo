import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceSumOrderByAggregateInput> = z
  .object({
    amount: z.lazy(() => SortOrderSchema).optional(),
    paid_amount: z.lazy(() => SortOrderSchema).optional(),
    mismatch: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InvoiceSumOrderByAggregateInputObjectSchema = Schema;
