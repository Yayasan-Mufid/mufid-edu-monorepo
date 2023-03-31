import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RolePermissionOrderByRelationAggregateInputObjectSchema } from './RolePermissionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionOrderByWithRelationInput> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    role_permissions: z
      .lazy(() => RolePermissionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PermissionOrderByWithRelationInputObjectSchema = Schema;
