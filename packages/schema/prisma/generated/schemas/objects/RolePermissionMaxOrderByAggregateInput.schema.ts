import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role_name: z.lazy(() => SortOrderSchema).optional(),
    permission_name: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RolePermissionMaxOrderByAggregateInputObjectSchema = Schema;
