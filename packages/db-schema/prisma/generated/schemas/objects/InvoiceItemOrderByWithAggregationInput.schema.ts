import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InvoiceItemCountOrderByAggregateInputObjectSchema } from './InvoiceItemCountOrderByAggregateInput.schema';
import { InvoiceItemAvgOrderByAggregateInputObjectSchema } from './InvoiceItemAvgOrderByAggregateInput.schema';
import { InvoiceItemMaxOrderByAggregateInputObjectSchema } from './InvoiceItemMaxOrderByAggregateInput.schema';
import { InvoiceItemMinOrderByAggregateInputObjectSchema } from './InvoiceItemMinOrderByAggregateInput.schema';
import { InvoiceItemSumOrderByAggregateInputObjectSchema } from './InvoiceItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvoiceItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    invoice_id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    unit_price: z.lazy(() => SortOrderSchema).optional(),
    discount: z.lazy(() => SortOrderSchema).optional(),
    product_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => InvoiceItemCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => InvoiceItemAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => InvoiceItemMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => InvoiceItemMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => InvoiceItemSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const InvoiceItemOrderByWithAggregationInputObjectSchema = Schema;
