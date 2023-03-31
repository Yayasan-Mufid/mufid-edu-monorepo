import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PermissionCountOrderByAggregateInputObjectSchema } from './PermissionCountOrderByAggregateInput.schema';
import { PermissionMaxOrderByAggregateInputObjectSchema } from './PermissionMaxOrderByAggregateInput.schema';
import { PermissionMinOrderByAggregateInputObjectSchema } from './PermissionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionOrderByWithAggregationInput> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PermissionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PermissionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PermissionMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PermissionOrderByWithAggregationInputObjectSchema = Schema;
