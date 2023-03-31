import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserRoleCountOrderByAggregateInputObjectSchema } from './UserRoleCountOrderByAggregateInput.schema';
import { UserRoleMaxOrderByAggregateInputObjectSchema } from './UserRoleMaxOrderByAggregateInput.schema';
import { UserRoleMinOrderByAggregateInputObjectSchema } from './UserRoleMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    role_name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => UserRoleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => UserRoleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserRoleMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UserRoleOrderByWithAggregationInputObjectSchema = Schema;
