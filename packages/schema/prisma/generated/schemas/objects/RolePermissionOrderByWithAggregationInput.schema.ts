import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RolePermissionCountOrderByAggregateInputObjectSchema } from './RolePermissionCountOrderByAggregateInput.schema';
import { RolePermissionMaxOrderByAggregateInputObjectSchema } from './RolePermissionMaxOrderByAggregateInput.schema';
import { RolePermissionMinOrderByAggregateInputObjectSchema } from './RolePermissionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role_name: z.lazy(() => SortOrderSchema).optional(),
    permission_name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RolePermissionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RolePermissionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RolePermissionMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RolePermissionOrderByWithAggregationInputObjectSchema = Schema;
