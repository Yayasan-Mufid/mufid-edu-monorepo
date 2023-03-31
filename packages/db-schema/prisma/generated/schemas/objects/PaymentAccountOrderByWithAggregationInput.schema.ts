import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PaymentAccountCountOrderByAggregateInputObjectSchema } from './PaymentAccountCountOrderByAggregateInput.schema';
import { PaymentAccountMaxOrderByAggregateInputObjectSchema } from './PaymentAccountMaxOrderByAggregateInput.schema';
import { PaymentAccountMinOrderByAggregateInputObjectSchema } from './PaymentAccountMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentAccountOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    account_identifier: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    logo_url: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PaymentAccountCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PaymentAccountMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PaymentAccountMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PaymentAccountOrderByWithAggregationInputObjectSchema = Schema;
