import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InvoiceCountOrderByAggregateInputObjectSchema } from './InvoiceCountOrderByAggregateInput.schema';
import { InvoiceAvgOrderByAggregateInputObjectSchema } from './InvoiceAvgOrderByAggregateInput.schema';
import { InvoiceMaxOrderByAggregateInputObjectSchema } from './InvoiceMaxOrderByAggregateInput.schema';
import { InvoiceMinOrderByAggregateInputObjectSchema } from './InvoiceMinOrderByAggregateInput.schema';
import { InvoiceSumOrderByAggregateInputObjectSchema } from './InvoiceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    payment_method: z.lazy(() => SortOrderSchema).optional(),
    payment_account_id: z.lazy(() => SortOrderSchema).optional(),
    paid_amount: z.lazy(() => SortOrderSchema).optional(),
    mismatch: z.lazy(() => SortOrderSchema).optional(),
    paid_at: z.lazy(() => SortOrderSchema).optional(),
    payment_receipt_url: z.lazy(() => SortOrderSchema).optional(),
    confirmer: z.lazy(() => SortOrderSchema).optional(),
    confirmed_at: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    deadline: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => InvoiceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => InvoiceAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => InvoiceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => InvoiceMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => InvoiceSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const InvoiceOrderByWithAggregationInputObjectSchema = Schema;
