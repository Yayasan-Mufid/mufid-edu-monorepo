import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserRoleOrderByRelationAggregateInputObjectSchema } from './UserRoleOrderByRelationAggregateInput.schema';
import { RolePermissionOrderByRelationAggregateInputObjectSchema } from './RolePermissionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z
  .object({
    role: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    user_roles: z
      .lazy(() => UserRoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    role_permissions: z
      .lazy(() => RolePermissionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleOrderByWithRelationInputObjectSchema = Schema;
