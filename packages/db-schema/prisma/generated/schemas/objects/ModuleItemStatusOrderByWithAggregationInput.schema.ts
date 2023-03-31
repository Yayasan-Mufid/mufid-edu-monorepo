import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleItemStatusCountOrderByAggregateInputObjectSchema } from './ModuleItemStatusCountOrderByAggregateInput.schema';
import { ModuleItemStatusMaxOrderByAggregateInputObjectSchema } from './ModuleItemStatusMaxOrderByAggregateInput.schema';
import { ModuleItemStatusMinOrderByAggregateInputObjectSchema } from './ModuleItemStatusMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusOrderByWithAggregationInput> = z
  .object({
    module_item_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ModuleItemStatusCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ModuleItemStatusMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ModuleItemStatusMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleItemStatusOrderByWithAggregationInputObjectSchema = Schema;
