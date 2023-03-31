import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleOrderByWithRelationInputObjectSchema } from './RoleOrderByWithRelationInput.schema';
import { PermissionOrderByWithRelationInputObjectSchema } from './PermissionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role_name: z.lazy(() => SortOrderSchema).optional(),
    permission_name: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => RoleOrderByWithRelationInputObjectSchema).optional(),
    permission: z
      .lazy(() => PermissionOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const RolePermissionOrderByWithRelationInputObjectSchema = Schema;
