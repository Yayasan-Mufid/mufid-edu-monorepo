import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    invoice_id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unit_price: z.lazy(() => SortOrderSchema).optional(),
    discount: z.lazy(() => SortOrderSchema).optional(),
    product_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const InvoiceItemMaxOrderByAggregateInputObjectSchema = Schema;
