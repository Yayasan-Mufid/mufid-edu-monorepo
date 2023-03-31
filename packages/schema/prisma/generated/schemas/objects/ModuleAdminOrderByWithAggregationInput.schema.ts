import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModuleAdminCountOrderByAggregateInputObjectSchema } from './ModuleAdminCountOrderByAggregateInput.schema';
import { ModuleAdminMaxOrderByAggregateInputObjectSchema } from './ModuleAdminMaxOrderByAggregateInput.schema';
import { ModuleAdminMinOrderByAggregateInputObjectSchema } from './ModuleAdminMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    module_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    assigned_at: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ModuleAdminCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ModuleAdminMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ModuleAdminMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleAdminOrderByWithAggregationInputObjectSchema = Schema;
