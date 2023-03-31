import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleAccessCountOrderByAggregateInputObjectSchema } from './ModuleAccessCountOrderByAggregateInput.schema';
import { ModuleAccessMaxOrderByAggregateInputObjectSchema } from './ModuleAccessMaxOrderByAggregateInput.schema';
import { ModuleAccessMinOrderByAggregateInputObjectSchema } from './ModuleAccessMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    granted_on: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ModuleAccessCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ModuleAccessMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ModuleAccessMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleAccessOrderByWithAggregationInputObjectSchema = Schema;
